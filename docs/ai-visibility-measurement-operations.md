# AI visibility measurement operations

Last updated: 2026-07-29

## Measurement position

TheProjectSEO tracks generated-answer observations, not permanent AI rank positions. Every comparison must preserve its operating conditions and raw evidence.

## Registry design

- 50 canonical commercial prompt families
- 4 phrasings per family: canonical, persona, evidence and decision
- 200 total prompt phrasings
- 3 repetitions for a controlled condition
- 5 clusters: agency selection, AI-search problems, SEO services, platform searches, and industry/brand evaluation
- One primary page owner per family

The registry exports are generated with:

`node scripts/ai-visibility/export-prompt-registry.mjs`

## Required observation fields

| Group | Fields |
|---|---|
| Run identity | run ID, prompt ID, family ID, timestamp, reviewer |
| Surface | platform, model, interface, web-search state |
| Context | market, language, location, run number |
| Visibility | brand included, brand position, recommended or mentioned |
| Sources | cited brand URL, all cited URLs, visible search queries |
| Competition | competitors included in the same response |
| Quality | factual accuracy, sentiment, reviewer notes |
| Business | referral sessions, qualified leads, revenue |

## Sampling cadence

1. Weekly sentinel panel: tier-one canonical prompts, three repeats, the two most valuable platforms and markets.
2. Monthly rotation: assign the remaining persona, evidence and decision variants across platforms and markets. Do not cross every prompt with every condition.
3. Event-based checks: rerun affected families after important page releases, crawler changes, material source updates or major model/interface changes.
4. Quarterly review: remove obsolete buying questions, split mixed-intent families and add new commercial questions from sales calls, GSC, site search and community research.

## Interpretation rules

- Report an inclusion rate only with the exact denominator and conditions.
- Separate recommendation rate from mention rate.
- Do not merge platforms unless the platform mix is shown.
- Keep citations at URL level; a domain-level total can hide which page is actually selected.
- Use third-party visibility estimates as directional evidence.
- Treat GSC, Bing, server logs, referrals, forms, CRM pipeline and revenue as separate but joinable measurements.
- Label missing data instead of estimating it.

## Platform notes

- Google AI features: use GSC generative-AI reporting where available and retain page/query context.
- ChatGPT: detect `chatgpt.com` referrals and `utm_source=chatgpt.com`; record whether search was active.
- Claude: distinguish Claude-SearchBot, Claude-User and ClaudeBot roles.
- Perplexity: retain citations and visible search queries; verify crawler IP guidance before changing WAF rules.
- Gemini: keep Gemini observations distinct from Google Search and Google-Extended controls.
- Bing/Copilot: combine Bing Webmaster Tools evidence with separate Copilot observations where the interface permits.

## Decision outputs

Every reporting cycle should end with one of four actions:

1. Improve an existing page’s evidence.
2. Fix technical retrieval or indexability.
3. Create a missing page only when the buying task lacks a credible owner.
4. Make no page change because the observation moved without supporting search or business evidence.
