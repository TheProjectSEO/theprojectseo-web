# TheProjectSEO measurement and search runbook

Last audited: 29 July 2026

## Conversion funnel

1. A visitor arrives from organic search, an AI assistant, a referral, or a
   campaign.
2. The site preserves the landing page, external referrer, UTMs, supported paid
   click IDs, and a first-party session ID.
3. Consent-aware page views and journey events are sent to GA4 and Clarity when
   their public project IDs are configured.
4. Contact links, form views, form starts, submissions, and failures are
   measured without sending form-entered personal information to analytics.
5. A successful lead is stored in Supabase before it is counted as a
   `generate_lead` event. Slack and Resend notifications run only after storage
   succeeds, and the server waits for both attempts before returning. Provider
   failures are logged without turning a safely stored lead into a failed form
   submission.
6. Every lead has a unique conversion ID. The ID can be used as the Google Ads
   transaction ID to prevent duplicate paid conversions.
7. Lead submission and same-visit attribution continue to work when analytics
   consent is declined.

## Captured attribution

- `utm_id`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and
  `utm_content`
- Google Ads and Campaign Manager: `gclid`, `dclid`, `gclsrc`, `gbraid`, and
  `wbraid`
- Microsoft Ads: `msclkid`
- Meta Ads: `fbclid`
- TikTok Ads: `ttclid`
- LinkedIn Ads: `li_fat_id`
- Sanitized landing URL and external referrer
- First-party session ID and unique lead conversion ID

The lead database keeps the supported paid click IDs in the sanitized
`source_url`. Names, email addresses, phone numbers, company names, messages,
and submitted audit URLs are not included in GA4 or Clarity custom events.

## Event map

| Journey stage                   | Event                                                           | GA4 treatment                                |
| ------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| Page consumed                   | `page_view`                                                     | Standard page view, including SPA navigation |
| Contact CTA selected            | `lead_cta_click`                                                | Funnel event                                 |
| Lead form displayed             | `lead_form_view`                                                | Funnel event                                 |
| Lead form first used            | `lead_form_start`                                               | Funnel event                                 |
| Lead form submitted             | `lead_form_submit`                                              | Diagnostic event                             |
| Lead stored successfully        | `generate_lead`                                                 | Mark as a GA4 key event                      |
| Lead storage/validation failed  | `lead_submit_error`                                             | Alert/QA event                               |
| Pricing choice selected         | `pricing_plan_select`                                           | Funnel segmentation                          |
| Live audit started/completed    | `audit_start`, `audit_complete`                                 | Product engagement                           |
| Newsletter email stored         | `sign_up`                                                       | Secondary conversion, not a paid lead        |
| Email/phone/outbound/file links | `email_click`, `phone_click`, `outbound_click`, `file_download` | Supporting engagement                        |

When a Microsoft Advertising UET tag is configured, it receives the same
consented event names. `generate_lead` also carries the unique conversion event
ID for reconciliation.

## Consent behavior

- Google consent mode defaults analytics and advertising storage to `denied`.
- Google URL passthrough is enabled so supported ad-click information can
  survive same-domain navigation without ad-storage consent.
- Microsoft Clarity receives Consent API V2 signals.
- Visitors can select **Allow analytics** or **Essential only**.
- The selection can be changed later through **Analytics settings** in the
  footer.
- The first-party behavioral session tables run only after analytics consent.
- The lead form remains operational in essential-only mode.
- Google and Clarity may send limited cookieless consent-mode signals in
  essential-only mode; persistent analytics cookies, cross-page analytics
  identity, and custom funnel events require consent.

## Platform status

### Google Analytics 4

- Dedicated account and property created on 29 July 2026:
  - Account: TheProjectSEO
  - Account ID: 402662167
  - Property: TheProjectSEO
  - Property ID: 547521765
  - Reporting timezone: India
  - Currency: USD
  - Business category: Business & industrial
  - Business size: 1–10
  - Objectives: Generate leads; understand web/app traffic
- Google Analytics terms and Google Ads Data Processing Terms accepted for
  India with the account owner's explicit authorization.
- Web stream: TheProjectSEO Website (`https://theprojectseo.com`)
  - Stream ID: `15343218943`
  - Measurement ID: `G-N4WG429GVJ`
  - Enhanced measurement: enabled
- Event and user data retention: 14 months.
- `generate_lead` was pre-registered using the site's code implementation and
  marked as a key event, counted once per event, with no arbitrary default
  monetary value.
- Search Console property `https://theprojectseo.com/` is associated with the
  web stream.

### Google Search Console

- Verified URL-prefix property for `https://theprojectseo.com/`.
- XML sitemap successful with 102 discovered URLs.
- robots.txt valid; HTTPS report clean; no manual actions; no security issues.
- Verified owner: Aditya Aman. Delegated owner: SEO Team. Full data reader:
  `tps-data-reader`. No unused ownership tokens.
- Three materially rewritten blog guides were submitted to the priority crawl
  queue on 29 July 2026.
- Historical report showed 25 old 404 URLs and eight crawled-not-indexed URLs.
  Two valuable legacy URLs now have relevant permanent redirects. The remaining
  examples are obsolete WordPress/theme/demo URLs and should not be redirected
  indiscriminately to the homepage.
- Crawl stats: 444 requests in the last 90 days, 129 ms average response, and no
  host problems. The historical response mix was 64% 200, 24% 404, and 12% 301.
- Sitemap generation no longer assigns the build time as `lastmod` to every
  page. Maintained editorial dates are used where available.
- The generated robots policy no longer blocks `/_next/`; Google, Bing, and
  AI-search crawlers can fetch the JavaScript and CSS required to render the
  site.
- The last three-month performance report showed 182 clicks from 6,820
  impressions, 2.7% CTR, and average position 61.4. At least 135 of the clicks
  were from the three leading branded queries, so non-brand acquisition remains
  the principal growth gap.
- The links report showed 3,965 external links, with 3,953 attributed to
  `expressway.ph` and all external links currently consolidating on the home
  page. This is an intentional author/company relationship, but the extreme
  sitewide concentration should not be treated as diversified authority.
- No temporary-removal, outdated-content, or SafeSearch requests were present
  in the last six months.

### Bing Webmaster Tools

- Verified administrator property imported from Search Console.
- Sitemap resubmitted on 29 July 2026.
- IndexNow was previously receiving only two isolated URL notifications. A
  root-level IndexNow key and bulk submission command are now included in the
  repository.
- Full sitemap Site Scan completed on 29 July 2026. Bing scanned all 102
  submitted sitemap URLs and reported 0 errors, 0 warnings, and no issue
  details.
- Crawl Control remains on Bing's default profile, with no artificial crawl
  throttling configured.
- There are no active, expiring, or expired URL blocks and no copyright-removal
  notices.
- Search reporting currently shows no Bing clicks or impressions.

### Microsoft Clarity

- TheProjectSEO project created through Bing Webmaster Tools on 29 July 2026
  after the account owner's explicit authorization to accept the Clarity
  terms.
- Project ID: `xtspwvskr4`
- Website: `https://theprojectseo.com/`
- Industry: B2B Services
- Cookies-by-default: off, so Clarity Consent Mode requires an explicit
  consent signal before it sets analytics cookies in every region.
- Bot detection: on.
- Site code uses Clarity Consent API V2 for granted and denied analytics and
  advertising storage states.

## Deployment checklist

1. The production IDs are committed as safe, public defaults so measurement
   cannot silently disappear when a hosting variable is omitted:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`

   Hosting variables can still override them for previews or forks.

2. When a Google Ads account and lead conversion action exist, also set:
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID`
   - `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL`

3. When a Microsoft Advertising UET tag exists, set:
   - `NEXT_PUBLIC_MICROSOFT_UET_TAG_ID`

   UET defaults `ad_storage` to denied, follows the website consent update, and
   receives the same `generate_lead` event ID used for reconciliation and
   deduplication.

4. Deploy the site and verify:
   - The consent banner appears for a new browser.
   - Essential-only mode sets no GA4 or Clarity cookies.
   - GA4 Realtime/DebugView receives a consented page view and funnel events.
   - Clarity receives a consented session and custom lead events.
   - A controlled test lead is present in Supabase and both notifications
     arrive.
   - The same test lead appears once as `generate_lead`, with no personal
     information in event parameters.

5. Confirm the public IndexNow key file returns HTTP 200, then submit the live
   sitemap:

   ```sh
   npm run indexnow -- --sitemap
   ```

6. For later releases, submit only URLs that were added, changed, redirected,
   or removed:

   ```sh
   npm run indexnow -- https://theprojectseo.com/changed-page
   ```

7. In Search Console after deployment:
   - Confirm `/faq/` resolves to `/#faq`.
   - Confirm `/case-studies/automobile-seo` resolves to
     `/case-studies/expressway-ph`.
   - Start validation for the historical 404 issue only after those production
     redirects are live.
   - Let Google recrawl the indexed retired service and case-study URLs already
     covered by the canonical redirect table.

8. In Bing after deployment, confirm the refreshed sitemap and IndexNow
   submissions, then rerun Site Scan against the deployed URL inventory if the
   current pre-deployment scan retains stale redirect or metadata warnings.

## Local production verification

Verified against the optimized production build on 29 July 2026:

- The build completes successfully and prerenders all 112 static routes.
- The website loads exactly one Google tag script using
  `G-N4WG429GVJ` and exactly one Clarity script using `xtspwvskr4`.
- A first-time visitor receives the analytics choice with **Essential only**
  and **Allow analytics** controls.
- Choosing essential-only closes the prompt and can be changed later through
  the footer's **Analytics settings** control.
- Choosing analytics consent loads the same configured scripts without
  duplicating either tag.
- A Google Ads test landing retained its UTM values and `gclid` in both
  rendered lead payloads with unique lead-event IDs.
- A separate Microsoft Ads test landing retained its UTM values and
  `msclkid` after an internal navigation to `/contact`, while essential-only
  mode was active. Both the main contact form and newsletter form carried the
  original paid landing URL, a common first-party session ID, and separate
  conversion IDs.
- The generated robots response returns 200 and no longer blocks `/_next/`.
- The IndexNow key returns 200 with the expected key.
- `/faq/` normalizes to `/faq`, then permanently redirects to `/#faq`.
- `/case-studies/automobile-seo` permanently redirects to
  `/case-studies/expressway-ph`.

These checks prove the build artifact and same-visit attribution behavior.
They do not replace the required controlled production lead test.

## Outstanding governance item

`/admin/analytics` currently returns an error in production and has no
application-level sign-in flow. It must not be enabled with a Supabase service
role until authenticated access is implemented or the route is protected at
the hosting layer. This does not affect public lead capture.

## Completion gate

The local implementation is production-build clean, but the overall measurement
setup is **not complete or live** until every row below is verified.

| Requirement | Current evidence | Status |
| --- | --- | --- |
| Site-side funnel and attribution code | Production build, type checks, targeted linting, exact tag endpoint checks, both consent choices, and Google/Microsoft paid-attribution journey checks pass locally | Ready locally |
| Bing Webmaster Tools | 102 sitemap URLs scanned; 0 errors, 0 warnings, no blocked URLs or copyright notices | Complete |
| Google Search Console platform audit | Sitemap, ownership, indexing, links, removals, security, manual actions, HTTPS, and crawl reports reviewed | Complete |
| GA4 account, property, stream, retention, key event, and Search Console association | Terms accepted; `G-N4WG429GVJ`; 14-month retention; `generate_lead` submitted as a code-backed key event; Search Console association confirmed | Complete |
| TheProjectSEO Clarity project and consent configuration | Project `xtspwvskr4`; terms accepted; B2B Services; cookies-by-default off; Consent API V2 implemented | Complete |
| Production deployment | Live `robots.txt` still blocks `/_next/`; the IndexNow key and two priority redirects return 404; no GA4, Clarity, or UET tag is present on the live home page | Not deployed |
| End-to-end production conversion test | Requires live IDs, deployment, a controlled lead, database confirmation, notifications, GA4 DebugView/Realtime, and Clarity verification | Not started |
