import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'
import sharp from 'sharp'

const projectRoot = process.cwd()
const port = 3020
const baseUrl = `http://127.0.0.1:${port}`
const outputDirectory = path.join(projectRoot, 'outputs', 'article-qa-2026-07-29')
const publicImageDirectory = path.join(projectRoot, 'public', 'images', 'blog')
const publicFigureDirectory = path.join(publicImageDirectory, 'figures')

const articles = [
  {
    slug: 'saas-organic-traffic-qualified-demos',
    expectedTitle: 'SaaS Organic Traffic to Qualified Demos: Fix the Gap',
  },
  {
    slug: 'hotel-direct-booking-search-leakage-audit',
    expectedTitle: 'Hotel Direct-Booking Search Leakage Audit',
  },
]

await Promise.all([
  mkdir(outputDirectory, { recursive: true }),
  mkdir(publicImageDirectory, { recursive: true }),
  mkdir(publicFigureDirectory, { recursive: true }),
])

const server = spawn(
  process.execPath,
  [
    path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next'),
    'dev',
    '--turbopack',
    '--port',
    String(port),
  ],
  {
    cwd: projectRoot,
    env: process.env,
    stdio: ['ignore', 'pipe', 'pipe'],
  },
)

let serverOutput = ''
server.stdout.on('data', (chunk) => {
  serverOutput += chunk.toString()
})
server.stderr.on('data', (chunk) => {
  serverOutput += chunk.toString()
})

async function waitForServer() {
  const startedAt = Date.now()

  while (Date.now() - startedAt < 60_000) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before QA started.\n${serverOutput}`)
    }

    try {
      const response = await fetch(baseUrl)
      if (response.ok || response.status === 404) return
    } catch {
      // The server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  throw new Error(`Timed out waiting for Next.js.\n${serverOutput}`)
}

async function dismissConsent(page) {
  const essentialOnly = page.getByRole('button', { name: 'Essential only' })
  if (await essentialOnly.isVisible().catch(() => false)) {
    await essentialOnly.click()
  }
}

const browser = await chromium.launch({ headless: true })
const results = []

try {
  await waitForServer()

  for (const article of articles) {
    const route = `/blog/${article.slug}`
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1,
    })
    const desktopPage = await desktopContext.newPage()
    const consoleErrors = []

    desktopPage.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    desktopPage.on('pageerror', (error) => consoleErrors.push(error.message))

    const response = await desktopPage.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle',
      timeout: 60_000,
    })
    await dismissConsent(desktopPage)

    const desktopPng = path.join(outputDirectory, `${article.slug}-desktop.png`)
    await desktopPage.screenshot({ path: desktopPng, fullPage: true })

    const heroPng = path.join(outputDirectory, `${article.slug}-hero-master.png`)
    const heroWebp = path.join(publicImageDirectory, `${article.slug}.webp`)
    const heroContext = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 2,
    })
    const heroPage = await heroContext.newPage()
    await heroPage.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle',
      timeout: 60_000,
    })
    await dismissConsent(heroPage)
    await heroPage.addStyleTag({
      content: '[data-full-size-badge]{display:none!important}',
    })
    await heroPage.locator('[data-hero-art="true"]').screenshot({ path: heroPng })
    await sharp(heroPng)
      .resize(1600, 900, {
        fit: 'contain',
        background: { r: 247, g: 245, b: 243, alpha: 1 },
      })
      .webp({ quality: 90, smartSubsample: true })
      .toFile(heroWebp)

    const figureLocators = heroPage.locator('[data-figure-key]')
    const figureTotal = await figureLocators.count()
    for (let index = 0; index < figureTotal; index += 1) {
      const figure = figureLocators.nth(index)
      const key = await figure.getAttribute('data-figure-key')
      if (!key) continue

      const masterPath = path.join(outputDirectory, `${key}-master.png`)
      const deliveryPath = path.join(publicFigureDirectory, `${key}.webp`)
      await figure.screenshot({ path: masterPath })
      await sharp(masterPath)
        .webp({ quality: 92, smartSubsample: true })
        .toFile(deliveryPath)
    }
    await heroContext.close()

    const desktopState = await desktopPage.evaluate(() => {
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href')
      const ogImage = document
        .querySelector('meta[property="og:image"]')
        ?.getAttribute('content')
      const schemas = Array.from(
        document.querySelectorAll('script[type="application/ld+json"]'),
      ).flatMap((element) => {
        try {
          const value = JSON.parse(element.textContent || '{}')
          return [value['@type']]
        } catch {
          return []
        }
      })

      return {
        title: document.title,
        canonical,
        ogImage,
        schemaTypes: schemas,
        figureCount: document.querySelectorAll('main article figure').length,
        sectionCount: document.querySelectorAll('main article section[id]').length,
        articleWordCount: (document.querySelector('main article')?.textContent || '')
          .trim()
          .split(/\s+/)
          .filter(Boolean).length,
        hasHorizontalOverflow:
          document.documentElement.scrollWidth > document.documentElement.clientWidth,
        brokenImages: Array.from(document.images)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.getAttribute('src')),
      }
    })

    await desktopContext.close()

    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 812 },
      deviceScaleFactor: 2,
    })
    const mobilePage = await mobileContext.newPage()
    const mobileResponse = await mobilePage.goto(`${baseUrl}${route}`, {
      waitUntil: 'networkidle',
      timeout: 60_000,
    })
    await dismissConsent(mobilePage)
    const mobilePng = path.join(outputDirectory, `${article.slug}-mobile.png`)
    await mobilePage.screenshot({ path: mobilePng, fullPage: true })
    const mobileOverflow = await mobilePage.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    )
    await mobileContext.close()

    results.push({
      slug: article.slug,
      status: response?.status(),
      mobileStatus: mobileResponse?.status(),
      titleMatches: desktopState.title.includes(article.expectedTitle),
      ...desktopState,
      mobileOverflow,
      consoleErrors,
      screenshots: {
        desktop: path.relative(projectRoot, desktopPng),
        mobile: path.relative(projectRoot, mobilePng),
        social: path.relative(projectRoot, heroWebp),
      },
    })
  }
} finally {
  await browser.close()
  server.kill('SIGTERM')
}

console.log(JSON.stringify(results, null, 2))
