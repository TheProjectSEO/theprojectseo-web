# TheProjectSEO flagship article package

Prepared: 29 July 2026

## Publication decision

Produce two problem-led business-owner articles:

1. `/blog/saas-organic-traffic-qualified-demos`
2. `/blog/hotel-direct-booking-search-leakage-audit`

The user's instruction to complete and implement both articles satisfies the outline checkpoint in the production handoff.

## Article 1: SaaS organic traffic to qualified demos

### Reader contract

- **Starting competence:** The reader already has Search Console, GA4 and a CRM, and knows that organic traffic and demo submissions exist.
- **Problem:** Marketing reports traffic and leads, but the business cannot explain which organic journeys become sales-accepted opportunities.
- **Capability at the end:** Define a qualified-demo contract, map query families to page owners, join landing-page cohorts across systems, diagnose the first material break and create a 90-day backlog.
- **Business implication:** Prevents investment in more traffic or content when the commercial break is proof, form friction, routing, qualification or measurement.
- **Outside scope:** Person-level query attribution, a universal conversion benchmark, multi-touch revenue modeling and CRM-specific implementation code.

### Search intent and primary questions

- Primary intent: diagnostic / how-to with commercial evaluation.
- Primary keyword: `SaaS organic traffic qualified demos`.
- Related research queries:
  - `SaaS organic traffic not converting to demos`
  - `track organic leads from Google Search Console to GA4 CRM`
  - `SaaS SEO attribution qualified pipeline`
  - `SaaS content strategy product-led SEO demo conversions`

### Competitor corpus

Eleven usable current pages were reviewed across ProductLed, Quoleady, Right Left Agency, GWContent, Stackmatix, GrowthOS and current SaaS/operator discussions. Common coverage included funnel stages, bottom-funnel content, product-led content and demo or trial metrics.

The recurring gap was the joined operating cohort. Ranking pages generally did not show how to:

- separate a submitted demo from a sales-accepted opportunity;
- reconcile Search Console, GA4 and CRM ownership;
- handle query-level attribution limits honestly;
- version a qualification contract;
- use disqualification reasons to decide whether the page, CTA or audience is wrong;
- define acceptance criteria for the measurement repair.

### Primary-source ledger

| Source | Evidence type | Claim supported | Verified | Limitation |
|---|---|---|---|---|
| Google Analytics: Recommended events | Official documentation | Lead generation has separate submission, qualification, disqualification, working and conversion events | 29 Jul 2026 | Implementation still needs property-specific triggers |
| Google Analytics: Event parameters | Official documentation | Events can carry controlled non-personal context | 29 Jul 2026 | Does not authorize sending personal information |
| Connect Search Console to GA4 | Official documentation | GA4 exposes query and landing-page reports with limited compatible dimensions | 29 Jul 2026 | Not a person-level query-to-lead join |
| GA4 BigQuery Export | Official documentation | Raw received GA4 events can be exported for governed joins | 29 Jul 2026 | Missing events remain missing |
| Search Console Performance reports | Official documentation | Query, page, clicks, impressions, CTR and position definitions | 29 Jul 2026 | Privacy omissions, truncation and canonical aggregation apply |
| Search Console data limitations | Official documentation | GSC and GA4 totals can differ for documented reasons | 29 Jul 2026 | Reconciliation should investigate material gaps, not force equality |

### Differentiating angle

The article treats accepted opportunity as the commercial end state and the canonical landing page as the practical join between search demand, onsite behavior and CRM status. It gives a complete modeled workplace example and visibly separates modeled values from first-party evidence.

### Outline

1. Why traffic and demos diverge
2. Define a qualified-demo contract
3. Map query families to page owners
4. Join Search Console, GA4 and CRM
5. Diagnose the first material break
6. Complete modeled recruitment-SaaS example
7. Build the 90-day backlog
8. Verify and govern the result

### Internal links and conversion

- Primary commercial owner: `/industries/saas`
- Measurement service: `/services/analytics/seo-attribution`
- Supporting guides: technical audit, content optimization and ecommerce strategy
- CTA: request a scoped search-to-accepted-opportunity diagnostic using the reader's existing exports

## Article 2: Hotel direct-booking search leakage

### Reader contract

- **Starting competence:** The reader already operates a hotel website and booking engine and can access Search Console, GA4 and booking records.
- **Problem:** The property cannot tell whether direct bookings are lost at discovery, property evaluation, the booking-engine handoff, rate continuity, checkout or measurement.
- **Capability at the end:** Build a search-to-booking cohort, test cross-domain continuity, define booking events, reconcile purchases and prioritize the first verified break.
- **Business implication:** Prevents buying more traffic or replacing the booking engine before the property knows where booking value is actually lost.
- **Outside scope:** Booking-engine vendor selection, rate strategy, legal advice, payment security configuration and a universal hotel conversion benchmark.

### Search intent and primary questions

- Primary intent: diagnostic / operational audit.
- Primary keyword: `hotel direct booking audit`.
- Related research queries:
  - `hotel website direct booking leakage audit`
  - `hotel direct bookings SEO booking engine abandonment measurement GA4`
  - `hotel website conversion direct booking journey OTA comparison`
  - `GA4 hotel booking engine cross domain tracking`

### Competitor corpus

Ten usable current pages were reviewed across hotel technology vendors, specialist agencies, operator discussions and Google documentation. Common coverage included mobile friction, trust, OTA comparisons, booking-engine speed and conversion-rate claims.

The recurring gap was the end-to-end verification method. Ranking pages generally did not show how to:

- connect the pre-engine search journey to booking events;
- prove that the GA4 linker survives a production redirect;
- distinguish unwanted-referral configuration from cross-domain identity;
- preserve room, date, occupancy, rate, tax and cancellation context;
- reconcile purchase transaction IDs with the booking engine;
- label device-level examples as modeled rather than benchmarks.

### Primary-source ledger

| Source | Evidence type | Claim supported | Verified | Limitation |
|---|---|---|---|---|
| GA4 cross-domain measurement | Official documentation | Same-stream domain linking uses `_gl`; redirects and JavaScript can break it | 29 Jul 2026 | Production engine and consent states require testing |
| Google Tag Platform cross-domain guide | Official technical documentation | Linker transfers measurement identity between domains | 29 Jul 2026 | GA4 Admin setup is preferred for ordinary GA4 properties |
| GA4 recommended ecommerce events | Official documentation | `begin_checkout`, `add_payment_info`, `purchase` and `refund` describe distinct states | 29 Jul 2026 | Hotel item mapping is implementation-specific |
| Search Console Performance reports | Official documentation | Query/page demand can define landing cohorts | 29 Jul 2026 | No individual guest query attribution |
| Hotel Center free-booking-link best practices | Official product documentation | Selected room/rate and accurate pricing should remain easy to find | 29 Jul 2026 | Applies directly to Hotel Center referral flows; used as a continuity standard elsewhere |
| Hotel Center Price Accuracy Policy | Official policy | Total price, occupancy, itinerary, taxes and fees need consistency | 29 Jul 2026 | Rates are volatile and require dated verification |

### Differentiating angle

The article treats SEO, property content, cross-domain analytics, rate continuity and confirmed reservations as one auditable journey. It refuses to use a generic conversion benchmark as the diagnosis.

### Outline

1. The three leakage zones
2. Inventory search demand and page owners
3. Preserve the cross-domain guest
4. Define booking events
5. Build a search-to-booking cohort
6. Complete modeled independent-hotel example
7. Audit page and rate continuity
8. Verify and prioritize fixes

### Internal links and conversion

- Primary commercial owner: `/industries/travel`
- Measurement service: `/services/analytics/seo-attribution`
- Supporting guides: local SEO, technical audit and Core Web Vitals
- CTA: request a scoped search-to-booking leakage audit using existing reports and a redacted reconciliation

## Visual coverage and acquisition

Ten selected visuals are implemented as semantic React/CSS operating artifacts, tables and decision boards. Each figure also has a high-DPI WebP derivative under `public/images/blog/figures/` for keyboard-accessible full-size viewing. The two hero artifacts have separate 1600×900 social derivatives. No generated interface is presented as evidence. Modeled figures identify their fictional status in the visual itself and in the caption.

### Selected

| Article | Figure | Teaching job | Acquisition |
|---|---|---|---|
| SaaS | Search-to-pipeline operating model | Join Search Console demand, GA4 lead activity and CRM acceptance | Editorial operating artifact |
| SaaS | Query-to-page matrix | Assign buyer questions to credible page owners | Accessible HTML table visual |
| SaaS | Lead-event contract | Separate submit, qualification and conversion | Code artifact using official event names |
| SaaS | Modeled cohort | Locate the first material break | Labeled fictional data chart |
| SaaS | Priority board | Turn diagnosis into a 90-day sequence | Decision matrix |
| Hotel | Search-to-booking operating model | Preserve guest context and reconcile a transaction across the journey | Editorial operating artifact |
| Hotel | Cross-domain architecture | Show linker, shared stream and checks | Code diagram based on Google documentation |
| Hotel | Booking-event contract | Separate selection, checkout, payment and purchase | Code artifact using official event names |
| Hotel | Modeled device cohort | Teach segmentation without a fake benchmark | Labeled fictional data table |
| Hotel | Acceptance board | Define verification and human handoff | Decision board |

### Rejected

| Candidate | Reason |
|---|---|
| GA4 login or property home | Sophistication mismatch; does not teach the required state |
| Generic Search Console dashboard | Does not show the query/page decision or commercial join |
| Unredacted account screenshots | Privacy risk and unrelated property context |
| Stock hotel booking photograph | Decorative only; cannot teach handoff or event integrity |
| Generated booking-engine UI | Would be fabricated evidence |
| Third-party conversion benchmark poster | Repeats an unverified benchmark instead of teaching the audit |

## Known uncertainties and required human review

- A property owner should confirm that the public pricing and service-page paths remain correct before deployment.
- The SaaS event contract requires a CRM-specific implementation review.
- The hotel audit requires the booking-engine vendor's supported tag, linker, consent and deep-link behavior.
- Modeled values are deliberately not performance claims.
- Both articles passed production build, desktop/mobile rendering, link, schema, figure, metadata and overflow QA.
