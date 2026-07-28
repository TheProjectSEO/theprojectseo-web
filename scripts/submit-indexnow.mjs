const SITE_URL = 'https://theprojectseo.com'
const SITE_HOST = 'theprojectseo.com'
const INDEXNOW_KEY = '8472ee6a6b6c714ae3b74b4ceec3fda9'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

const requestedUrls = process.argv.slice(2)
const urls =
  requestedUrls.length > 0 ? requestedUrls : await readUrlsFromSitemap()
const uniqueUrls = [...new Set(urls.map(normalizeUrl))]

if (uniqueUrls.length === 0) {
  throw new Error('No URLs were supplied or found in the sitemap.')
}

if (uniqueUrls.length > 10_000) {
  throw new Error('IndexNow accepts no more than 10,000 URLs per request.')
}

for (const url of uniqueUrls) {
  if (new URL(url).host !== SITE_HOST) {
    throw new Error(`Refusing to submit a URL outside ${SITE_HOST}: ${url}`)
  }
}

const payload = {
  host: SITE_HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: uniqueUrls,
}

if (process.env.INDEXNOW_DRY_RUN === '1') {
  console.log(
    JSON.stringify(
      {
        endpoint: INDEXNOW_ENDPOINT,
        keyLocation: KEY_LOCATION,
        urlCount: uniqueUrls.length,
        urls: uniqueUrls,
      },
      null,
      2,
    ),
  )
  process.exit(0)
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
})

if (![200, 202].includes(response.status)) {
  const responseBody = await response.text()
  throw new Error(
    `IndexNow rejected the submission (${response.status}): ${responseBody || response.statusText}`,
  )
}

console.log(
  `IndexNow accepted ${uniqueUrls.length} URL${uniqueUrls.length === 1 ? '' : 's'} with HTTP ${response.status}.`,
)

async function readUrlsFromSitemap() {
  const response = await fetch(`${SITE_URL}/sitemap.xml`)

  if (!response.ok) {
    throw new Error(
      `Could not fetch the sitemap (${response.status} ${response.statusText}).`,
    )
  }

  const xml = await response.text()
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    decodeXml(match[1]),
  )
}

function normalizeUrl(value) {
  const url = new URL(value)
  url.hash = ''
  return url.toString().replace(/\/$/, '')
}

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
}
