"""
Citation-worthy content detection using embeddings.

Identifies sections of content that are optimized for citation by
AI systems and LLMs, supporting Generative Engine Optimization (GEO).
"""

import re
import numpy as np
from typing import Optional
from sklearn.metrics.pairwise import cosine_similarity

from ..models import ContentEmbedding, CitationOpportunity, CitationResult


# Patterns that indicate citation-worthy content
CITATION_PATTERNS = {
    "definition": {
        "patterns": [
            r'^[\w\s]+ is (?:a|an|the) [\w\s]+(?:that|which|where)',
            r'^[\w\s]+ refers to ',
            r'^[\w\s]+ can be defined as ',
            r'^Definition:',
            r'^The term [\w\s]+ means'
        ],
        "weight": 0.9,
        "reason": "Clear definition that LLMs can quote directly"
    },
    "statistic": {
        "patterns": [
            r'(?:approximately|about|roughly|nearly|over|more than) \d+%',
            r'\d+(?:\.\d+)?% of (?:people|patients|individuals|Americans)',
            r'studies show that \d+',
            r'according to (?:research|studies|data)',
            r'\$[\d,]+(?:\.\d+)? (?:per|for|on average)'
        ],
        "weight": 0.85,
        "reason": "Contains statistics that support factual claims"
    },
    "process": {
        "patterns": [
            r'(?:first|second|third|next|then|finally),?\s',
            r'step \d+:',
            r'the (?:first|next|final) step is',
            r'(?:begins|starts|ends) with'
        ],
        "weight": 0.75,
        "reason": "Clear process description for procedural answers"
    },
    "list": {
        "patterns": [
            r'^[\-\*\•]\s+\w+',
            r'^\d+\.\s+\w+',
            r'(?:include|includes|including):\s*(?:\n|$)',
            r'types of [\w\s]+ include'
        ],
        "weight": 0.8,
        "reason": "Structured list format ideal for comprehensive answers"
    },
    "comparison": {
        "patterns": [
            r'(?:unlike|compared to|in contrast to|versus|vs\.?)',
            r'the (?:difference|distinction) between',
            r'(?:similar|different) (?:to|from|than)',
            r'(?:advantages|disadvantages|pros|cons) (?:of|include)'
        ],
        "weight": 0.7,
        "reason": "Comparison content for nuanced explanations"
    },
    "authoritative": {
        "patterns": [
            r'according to (?:SAMHSA|NIDA|WHO|CDC|NIH|FDA)',
            r'research (?:shows|indicates|suggests|demonstrates)',
            r'evidence(?:-based)? (?:treatment|approach|practice)',
            r'(?:clinical|scientific) (?:studies|trials|evidence)'
        ],
        "weight": 0.95,
        "reason": "Authoritative source citation for credibility"
    }
}


def find_citation_worthy(
    content_text: str,
    min_section_length: int = 50,
    max_section_length: int = 500
) -> list[CitationOpportunity]:
    """
    Find sections of content that are optimized for AI citation.

    Args:
        content_text: Full text content to analyze
        min_section_length: Minimum characters for a section
        max_section_length: Maximum characters for a section

    Returns:
        List of CitationOpportunity objects
    """
    opportunities = []

    # Split into paragraphs and sentences
    paragraphs = re.split(r'\n\n+', content_text.strip())

    for para in paragraphs:
        para = para.strip()
        if len(para) < min_section_length:
            continue

        # Check against all citation patterns
        for pattern_type, config in CITATION_PATTERNS.items():
            for pattern in config["patterns"]:
                if re.search(pattern, para, re.IGNORECASE | re.MULTILINE):
                    # Found a match
                    section_text = para[:max_section_length]
                    if len(para) > max_section_length:
                        # Try to cut at sentence boundary
                        sentences = re.split(r'(?<=[.!?])\s+', section_text)
                        if len(sentences) > 1:
                            section_text = ' '.join(sentences[:-1])

                    score = score_citation_potential(section_text)

                    opportunity = CitationOpportunity(
                        section_text=section_text,
                        citation_score=score,
                        reason=config["reason"],
                        suggested_format=_suggest_format(pattern_type, section_text)
                    )
                    opportunities.append(opportunity)
                    break  # Only match first pattern type per paragraph

    # Remove duplicates and sort by score
    seen_texts = set()
    unique_opportunities = []
    for opp in opportunities:
        text_key = opp.section_text[:100]
        if text_key not in seen_texts:
            seen_texts.add(text_key)
            unique_opportunities.append(opp)

    unique_opportunities.sort(key=lambda x: x.citation_score, reverse=True)

    return unique_opportunities


def score_citation_potential(section_text: str) -> float:
    """
    Score a section's potential for AI citation.

    Considers:
    - Pattern matches
    - Length appropriateness
    - Structural clarity
    - Factual density

    Args:
        section_text: Text to score

    Returns:
        Score from 0 to 1
    """
    score = 0.0
    factors = 0

    # Pattern matching score
    pattern_score = 0.0
    for pattern_type, config in CITATION_PATTERNS.items():
        for pattern in config["patterns"]:
            if re.search(pattern, section_text, re.IGNORECASE):
                pattern_score = max(pattern_score, config["weight"])
                break

    if pattern_score > 0:
        score += pattern_score
        factors += 1

    # Length score (optimal: 100-300 chars)
    length = len(section_text)
    if 100 <= length <= 300:
        length_score = 1.0
    elif 50 <= length < 100 or 300 < length <= 500:
        length_score = 0.7
    else:
        length_score = 0.4
    score += length_score
    factors += 1

    # Sentence structure score
    sentences = re.split(r'(?<=[.!?])\s+', section_text)
    avg_sentence_length = len(section_text) / max(len(sentences), 1)
    if 60 <= avg_sentence_length <= 150:
        structure_score = 1.0
    elif 40 <= avg_sentence_length < 60 or 150 < avg_sentence_length <= 200:
        structure_score = 0.7
    else:
        structure_score = 0.4
    score += structure_score
    factors += 1

    # Factual density (numbers, proper nouns, etc.)
    factual_indicators = len(re.findall(r'\d+|[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+', section_text))
    factual_score = min(1.0, factual_indicators / 5)
    score += factual_score
    factors += 1

    return round(score / factors, 4) if factors > 0 else 0.0


def _suggest_format(pattern_type: str, section_text: str) -> str:
    """Suggest formatting improvements for citation optimization."""
    suggestions = {
        "definition": "Consider adding 'X is defined as...' phrasing for clearer extraction",
        "statistic": "Ensure statistics include source attribution",
        "process": "Use numbered steps for clearer procedural extraction",
        "list": "Format as bulleted list with consistent structure",
        "comparison": "Use parallel structure for comparison points",
        "authoritative": "Link to or cite the original source"
    }
    return suggestions.get(pattern_type, "Maintain clear, concise structure")


def analyze_citation_readiness(
    content_embedding: ContentEmbedding,
    content_text: str,
    topic_embeddings: Optional[dict[str, list[float]]] = None
) -> CitationResult:
    """
    Comprehensive citation analysis for a content piece.

    Args:
        content_embedding: ContentEmbedding object
        content_text: Full text of the content
        topic_embeddings: Optional topic embeddings for relevance scoring

    Returns:
        CitationResult with opportunities and scores
    """
    opportunities = find_citation_worthy(content_text)

    # Calculate total citation potential
    if opportunities:
        total_potential = np.mean([o.citation_score for o in opportunities])
        # Bonus for having multiple citation-worthy sections
        quantity_bonus = min(0.2, len(opportunities) * 0.02)
        total_potential = min(1.0, total_potential + quantity_bonus)
    else:
        total_potential = 0.0

    return CitationResult(
        url=content_embedding.url,
        total_citation_potential=round(float(total_potential), 4),
        opportunities=opportunities[:10]  # Top 10 opportunities
    )


def compare_citation_potential(
    content_data: list[tuple[ContentEmbedding, str]]
) -> list[dict]:
    """
    Compare citation potential across multiple content pieces.

    Args:
        content_data: List of (ContentEmbedding, content_text) tuples

    Returns:
        List of comparison dictionaries sorted by potential
    """
    results = []

    for content_embedding, content_text in content_data:
        citation_result = analyze_citation_readiness(
            content_embedding, content_text
        )

        results.append({
            "url": content_embedding.url,
            "title": content_embedding.title,
            "total_citation_potential": citation_result.total_citation_potential,
            "citation_opportunities_count": len(citation_result.opportunities),
            "top_opportunity": (
                citation_result.opportunities[0].to_dict()
                if citation_result.opportunities else None
            )
        })

    # Sort by citation potential
    results.sort(key=lambda x: x["total_citation_potential"], reverse=True)

    return results


def suggest_citation_improvements(
    content_text: str,
    target_score: float = 0.7
) -> list[str]:
    """
    Suggest improvements to increase citation potential.

    Args:
        content_text: Current content text
        target_score: Target citation score

    Returns:
        List of improvement suggestions
    """
    current_opportunities = find_citation_worthy(content_text)
    current_score = (
        np.mean([o.citation_score for o in current_opportunities])
        if current_opportunities else 0.0
    )

    suggestions = []

    if current_score < target_score:
        # Check what's missing
        found_types = set()
        for opp in current_opportunities:
            for pattern_type, config in CITATION_PATTERNS.items():
                for pattern in config["patterns"]:
                    if re.search(pattern, opp.section_text, re.IGNORECASE):
                        found_types.add(pattern_type)
                        break

        # Suggest adding missing high-value patterns
        high_value_missing = []
        for pattern_type, config in CITATION_PATTERNS.items():
            if pattern_type not in found_types and config["weight"] >= 0.8:
                high_value_missing.append(pattern_type)

        if "definition" in high_value_missing:
            suggestions.append(
                "Add clear definitions using 'X is...' or 'X refers to...' phrasing"
            )
        if "statistic" in high_value_missing:
            suggestions.append(
                "Include relevant statistics with source attribution"
            )
        if "authoritative" in high_value_missing:
            suggestions.append(
                "Reference authoritative sources like SAMHSA, NIDA, or peer-reviewed research"
            )
        if "list" in high_value_missing:
            suggestions.append(
                "Add bulleted or numbered lists for comprehensive coverage"
            )

        # General suggestions
        if len(current_opportunities) < 3:
            suggestions.append(
                "Add more structured, quotable paragraphs (3-5 sentences each)"
            )

        word_count = len(content_text.split())
        if word_count < 800:
            suggestions.append(
                "Expand content to at least 800 words for comprehensive coverage"
            )

    return suggestions
