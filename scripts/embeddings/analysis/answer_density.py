"""
Answer density analysis using embeddings.

Analyzes how well content answers common questions and identifies
sections that are optimized for AI/LLM citation.
"""

import re
import numpy as np
from typing import Optional
from sklearn.metrics.pairwise import cosine_similarity

from ..models import ContentEmbedding, AnswerDensityResult


# Import SEO-specific questions from taxonomy
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))
from seo_taxonomies import DEFAULT_SEO_QUESTIONS

# Use SEO questions for answer density analysis
DEFAULT_ADDICTION_QUESTIONS = DEFAULT_SEO_QUESTIONS


def analyze_answer_density(
    content_embedding: ContentEmbedding,
    question_embeddings: dict[str, list[float]],
    content_text: str,
    answer_threshold: float = 0.5
) -> AnswerDensityResult:
    """
    Analyze how well content answers common questions.

    Args:
        content_embedding: ContentEmbedding to analyze
        question_embeddings: Dictionary mapping questions to embeddings
        content_text: Full text content for section analysis
        answer_threshold: Minimum similarity to consider question answered

    Returns:
        AnswerDensityResult with analysis
    """
    content_vec = np.array(content_embedding.embedding).reshape(1, -1)

    questions_answered = []
    questions_unanswered = []
    question_scores = {}

    for question, q_vec in question_embeddings.items():
        q_vec = np.array(q_vec).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, q_vec)[0][0])
        question_scores[question] = similarity

        if similarity >= answer_threshold:
            questions_answered.append(question)
        else:
            questions_unanswered.append(question)

    # Calculate answer density score
    if question_scores:
        answer_density_score = np.mean(list(question_scores.values()))
    else:
        answer_density_score = 0.0

    # Find answerable sections in the content
    answerable_sections = find_answerable_sections(content_text)

    # Generate improvement suggestions
    suggestions = []
    if questions_unanswered:
        # Sort by how close they are to being answered
        almost_answered = [
            q for q in questions_unanswered
            if question_scores.get(q, 0) >= answer_threshold * 0.7
        ]
        if almost_answered:
            suggestions.append(
                f"Expand content to better answer: {', '.join(almost_answered[:3])}"
            )

        # Completely missing topics
        missing = [
            q for q in questions_unanswered
            if question_scores.get(q, 0) < answer_threshold * 0.5
        ]
        if missing:
            suggestions.append(
                f"Add new sections addressing: {', '.join(missing[:3])}"
            )

    # Check for quote-ready formatting
    if not answerable_sections:
        suggestions.append(
            "Add clearly structured answer paragraphs that can be quoted by AI"
        )

    return AnswerDensityResult(
        url=content_embedding.url,
        answer_density_score=round(float(answer_density_score), 4),
        questions_answered=questions_answered,
        questions_unanswered=questions_unanswered,
        answerable_sections=answerable_sections,
        improvement_suggestions=suggestions
    )


def find_answerable_sections(content_text: str) -> list[dict]:
    """
    Identify sections of content that are formatted for easy AI citation.

    Looks for:
    - Direct definitions
    - Numbered/bulleted lists
    - Short, factual paragraphs
    - Sections with clear structure

    Args:
        content_text: Full text content

    Returns:
        List of dictionaries with section info
    """
    answerable_sections = []

    # Split into paragraphs
    paragraphs = re.split(r'\n\n+', content_text.strip())

    for i, para in enumerate(paragraphs):
        para = para.strip()
        if not para or len(para) < 50:
            continue

        section_type = None
        quote_score = 0.0

        # Check for definition patterns
        definition_patterns = [
            r'^[\w\s]+ is (?:a|an|the) ',
            r'^[\w\s]+ refers to ',
            r'^[\w\s]+ means ',
            r'^Definition:',
            r'^[\w\s]+: [\w\s]+ is '
        ]
        for pattern in definition_patterns:
            if re.search(pattern, para, re.IGNORECASE):
                section_type = "definition"
                quote_score = 0.9
                break

        # Check for bullet/numbered lists
        if re.search(r'^[\d\-\*\•]\s', para, re.MULTILINE):
            if section_type is None:
                section_type = "list"
                quote_score = 0.8

        # Check for factual statements with numbers/statistics
        if re.search(r'\d+%|\d+ percent|\d+ days|\d+ weeks|\$\d+', para):
            if section_type is None:
                section_type = "statistic"
                quote_score = 0.85

        # Check for short, clear paragraphs (ideal for citation)
        word_count = len(para.split())
        if 30 <= word_count <= 100:
            if section_type is None:
                section_type = "concise_paragraph"
                quote_score = 0.7

        # Skip overly long or short sections
        if section_type and quote_score > 0:
            answerable_sections.append({
                "section_index": i,
                "section_type": section_type,
                "quote_score": quote_score,
                "word_count": word_count,
                "preview": para[:200] + "..." if len(para) > 200 else para
            })

    # Sort by quote score
    answerable_sections.sort(key=lambda x: x["quote_score"], reverse=True)

    return answerable_sections[:10]  # Return top 10


def score_section_answerability(
    section_text: str,
    question_embeddings: dict[str, list[float]],
    section_embedding: list[float]
) -> dict:
    """
    Score how well a specific section answers questions.

    Args:
        section_text: Text of the section
        question_embeddings: Question embeddings to check against
        section_embedding: Embedding of the section

    Returns:
        Dictionary with scoring details
    """
    section_vec = np.array(section_embedding).reshape(1, -1)

    best_question = None
    best_score = 0.0

    for question, q_vec in question_embeddings.items():
        q_vec = np.array(q_vec).reshape(1, -1)
        similarity = float(cosine_similarity(section_vec, q_vec)[0][0])

        if similarity > best_score:
            best_score = similarity
            best_question = question

    # Calculate structural score
    structural_score = 0.0

    # Bonus for definitions
    if re.search(r' is (?:a|an|the) ', section_text):
        structural_score += 0.2

    # Bonus for lists
    if re.search(r'^[\d\-\*]\s', section_text, re.MULTILINE):
        structural_score += 0.15

    # Bonus for statistics
    if re.search(r'\d+%|\d+ percent', section_text):
        structural_score += 0.1

    # Bonus for appropriate length
    word_count = len(section_text.split())
    if 50 <= word_count <= 150:
        structural_score += 0.1

    total_score = min(1.0, best_score * 0.7 + structural_score)

    return {
        "best_matching_question": best_question,
        "semantic_score": round(best_score, 4),
        "structural_score": round(structural_score, 4),
        "total_score": round(total_score, 4),
        "word_count": word_count
    }


def identify_question_gaps(
    content_embeddings: list[ContentEmbedding],
    question_embeddings: dict[str, list[float]],
    coverage_threshold: float = 0.6
) -> dict[str, list[str]]:
    """
    Identify questions not well-answered by any content.

    Args:
        content_embeddings: All content to check
        question_embeddings: Questions to find answers for
        coverage_threshold: Threshold for considering question answered

    Returns:
        Dictionary mapping questions to list of URLs that best answer them
    """
    question_coverage = {q: [] for q in question_embeddings}

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)

        for question, q_vec in question_embeddings.items():
            q_vec = np.array(q_vec).reshape(1, -1)
            similarity = float(cosine_similarity(content_vec, q_vec)[0][0])

            if similarity >= coverage_threshold:
                question_coverage[question].append({
                    "url": content.url,
                    "score": round(similarity, 4)
                })

    # Sort each question's coverage by score
    for question in question_coverage:
        question_coverage[question].sort(key=lambda x: x["score"], reverse=True)

    return question_coverage


def suggest_faq_content(
    content_embeddings: list[ContentEmbedding],
    question_embeddings: dict[str, list[float]],
    min_gap_threshold: float = 0.5
) -> list[dict]:
    """
    Suggest FAQ content to add based on question coverage gaps.

    Args:
        content_embeddings: Existing content
        question_embeddings: Questions to check
        min_gap_threshold: Questions below this score are suggested

    Returns:
        List of FAQ suggestions with priority scores
    """
    question_coverage = identify_question_gaps(
        content_embeddings, question_embeddings
    )

    suggestions = []
    for question, coverage in question_coverage.items():
        if not coverage:
            # No content addresses this question
            suggestions.append({
                "question": question,
                "priority": "high",
                "best_existing_coverage": None,
                "recommendation": f"Create new content specifically answering: {question}"
            })
        elif coverage[0]["score"] < min_gap_threshold:
            suggestions.append({
                "question": question,
                "priority": "medium",
                "best_existing_coverage": coverage[0],
                "recommendation": f"Expand {coverage[0]['url']} to better answer this question"
            })

    # Sort by priority
    priority_order = {"high": 0, "medium": 1, "low": 2}
    suggestions.sort(key=lambda x: priority_order.get(x["priority"], 3))

    return suggestions
