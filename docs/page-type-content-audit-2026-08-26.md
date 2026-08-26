# TheProjectSEO page-type and public-content audit

Reviewed: 2026-08-26

## Purpose

Keep every client-facing page focused on useful business information, services, evidence and a clear next step while preventing internal operating material from being exposed on the public website.

## Page-type inventory

The application contained 80 static route files at the start of this audit. Five commercial editorial pages are being added in the same release.

| Page family | Baseline route files | Public role | Decision |
| --- | ---: | --- | --- |
| Homepage | 1 | Position the agency, show trust, route visitors | Keep public; simplify operating detail and strengthen trust signals |
| Core commercial pages | 8 | Explain the agency, pricing, contact, resources and service groups | Keep public; remove build notes and internal evidence language |
| Service hub and service detail pages | 32 | Explain deliverables, fit and next steps | Keep public; retain client-ready methods, remove implementation-system detail |
| Industry pages | 17 | Explain how the service changes by market | Keep public when the audience, constraints and evidence are distinct |
| Location pages | 2 | Support genuine market-specific discovery | Keep public; do not create interchangeable city pages |
| Blog hub and existing articles | 11 | Build demand and help buyers make decisions | Keep public; add five commercial articles from the approved research queue |
| Case-study hub and case studies | Data driven | Present approved evidence | Keep public only when names, evidence and methodology are approved |
| Glossary hub and terms | Data driven | Explain important concepts and connect them to services | Keep public; describe the research method at a high level |
| Internal admin and demonstration pages | 4 | Development, analytics and visual QA | Block in production, return 404 and emit noindex directives |

## Public-content standard

Client-facing pages may show:

- What TheProjectSEO does as a full-service SEO and AI-search agency.
- The audience, problem, deliverables, process and expected decision path for each service.
- Named experience and testimonials already approved for public use.
- Evidence with its source, date, measurement window and limitations.
- High-level research, implementation and measurement principles.
- Author, organization, contact, privacy, terms and other accountability signals.

Client-facing pages must not show:

- Credentials, API keys, account identifiers or private analytics access.
- Client-confidential names, metrics, screenshots, prompts or project information.
- Keyword sheets, competitor corpora, prompt libraries or internal research folders.
- Optimizer outputs, scoring thresholds, scripts, local file paths or toolchain internals.
- Draft status, placeholder instructions, task ownership or approval notes.
- Admin analytics, development demonstrations or operational dashboards.
- Unsupported proof, fabricated screenshots or performance guarantees.

## Changes made in this release

- Reframed the homepage and company page around full-service delivery, practical impact and approved brand experience.
- Added a concise trust strip using organizations already represented in public testimonials.
- Replaced internal corpus, optimizer, Python and automation language with client-ready descriptions of research and quality control.
- Replaced public draft, placeholder and evidence-production notes with clear evidence standards.
- Prevented internal admin and demonstration routes from rendering in production; also disallowed them in robots directives.
- Kept internal source material in project documentation and data sources rather than exposing it in rendered page copy.
- Added five demand-capture articles tied to pricing, analytics, conversion measurement, agency selection and performance-based SEO.

## Ongoing release gate

Before publishing a new page, confirm that it has one clear search and buyer purpose, a distinct page owner, approved claims, a relevant service path, primary sources where needed, and no internal production notes in visible text, structured data, accessibility text or HTML attributes.
