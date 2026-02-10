import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  ChevronRightIcon,
  Calendar,
  User,
  Rss,
  TrendingUp,
  Search,
  FileText,
  BarChart3,
  ArrowRight,
  Star,
  CheckCircle,
} from 'lucide-react'
import dayjs from 'dayjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Blog | TheProjectSEO',
  description:
    'Expert SEO insights, algorithm updates, ranking strategies, and digital marketing tips to help your business dominate search results.',
  alternates: {
    canonical: '/blog',
  },
}

// Sample blog posts - this would typically come from a CMS
const featuredPosts = [
  {
    slug: 'dominate-search-rankings-2025',
    title: 'How to Dominate Search Rankings in 2025: The Complete Guide',
    excerpt:
      'Discover the latest SEO strategies and algorithm updates that will help your website rank #1 on Google in 2025.',
    publishedAt: '2024-12-15',
    category: 'SEO Strategy',
    author: {
      name: 'Alex Rodriguez',
      image: 'bg-cream',
    },
    featured: true,
  },
  {
    slug: 'core-web-vitals-optimization',
    title: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings',
    excerpt:
      'Learn how to optimize your Core Web Vitals to improve user experience and search rankings.',
    publishedAt: '2024-12-10',
    category: 'Technical SEO',
    author: {
      name: 'Sarah Kim',
      image: 'bg-cream',
    },
    featured: true,
  },
  {
    slug: 'local-seo-complete-guide',
    title: 'Local SEO Complete Guide: Dominate Local Search Results',
    excerpt:
      'Everything you need to know about local SEO to attract more customers to your business.',
    publishedAt: '2024-12-05',
    category: 'Local SEO',
    author: {
      name: 'Jessica Taylor',
      image: 'bg-cream',
    },
    featured: true,
  },
]

const allPosts = [
  ...featuredPosts,
  {
    slug: 'keyword-research-tools-2025',
    title: 'Best Keyword Research Tools for 2025: Complete Comparison',
    excerpt:
      'Compare the top keyword research tools and find the perfect one for your SEO strategy.',
    publishedAt: '2024-11-28',
    category: 'SEO Tools',
    author: {
      name: 'Michael Chen',
      image: 'bg-cream',
    },
  },
  {
    slug: 'e-commerce-seo-strategy',
    title: 'E-commerce SEO Strategy: Increase Online Store Traffic by 300%',
    excerpt:
      'Proven e-commerce SEO tactics to drive more organic traffic and increase sales.',
    publishedAt: '2024-11-20',
    category: 'E-commerce SEO',
    author: {
      name: 'David Park',
      image: 'bg-cream',
    },
  },
  {
    slug: 'google-algorithm-updates-2024',
    title: 'Google Algorithm Updates 2024: What You Need to Know',
    excerpt:
      'Stay ahead of the latest Google algorithm changes and how they affect your rankings.',
    publishedAt: '2024-11-15',
    category: 'Algorithm Updates',
    author: {
      name: 'Emily Johnson',
      image: 'bg-cream',
    },
  },
  {
    slug: 'content-optimization-checklist',
    title: 'SEO Content Optimization Checklist: Rank Higher in 2025',
    excerpt:
      'A comprehensive checklist to optimize your content for better search engine rankings.',
    publishedAt: '2024-11-10',
    category: 'Content SEO',
    author: {
      name: 'Lisa Wong',
      image: 'bg-cream',
    },
  },
  {
    slug: 'technical-seo-audit',
    title: 'Technical SEO Audit: Find & Fix Issues Hurting Your Rankings',
    excerpt:
      'Step-by-step guide to conducting a technical SEO audit and fixing common issues.',
    publishedAt: '2024-11-01',
    category: 'Technical SEO',
    author: {
      name: 'Robert Martinez',
      image: 'bg-cream',
    },
  },
]

const categories = [
  'SEO Strategy',
  'Technical SEO',
  'Local SEO',
  'Content SEO',
  'E-commerce SEO',
  'SEO Tools',
  'Algorithm Updates',
]

function Hero() {
  return (
    <div className="relative">
        <HeroAnimation />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/dominate-search-rankings-2025"
              className="flex items-center gap-2 rounded-none bg-accent-soft px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent transition-all data-hover:bg-accent data-hover:text-white"
            >
              New: Advanced SEO Strategies for 2025
              <ChevronRightIcon className="size-3.5" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="max-w-4xl">
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Master SEO.
              <span className="text-accent">
                {' '}
                Dominate search.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone">
              Get the latest SEO insights, proven strategies, and algorithm
              updates that help businesses achieve #1 rankings and drive
              explosive organic growth.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="#featured-posts">Explore insights</Button>
              <Button variant="ghost" href="/contact">
                Get expert help
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-ink mb-2">
                500+
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                SEO Articles Published
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-ink mb-2">
                2M+
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                Monthly Readers
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-ink mb-2">
                95%
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl font-bold text-ink mb-2">
                Weekly
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                Fresh Content
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeaturedPost() {
  const mainPost = featuredPosts[0]

  return (
    <Container className="py-24" id="featured-posts">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div>
          <Subheading className="text-accent">Featured Article</Subheading>
          <Heading as="h2" className="mt-2">
            {mainPost.title}
          </Heading>
          <p className="mt-6 font-sans text-xl text-slate leading-relaxed">
            {mainPost.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-cream border border-border-strong flex items-center justify-center">
                <User className="size-6 text-accent" />
              </div>
              <div>
                <div className="font-heading font-medium text-ink">
                  {mainPost.author.name}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  SEO Expert
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-sans text-sm text-ash">
              <Calendar className="size-4" />
              {dayjs(mainPost.publishedAt).format('MMMM D, YYYY')}
            </div>
          </div>

          <div className="mt-8">
            <Button href={`/blog/${mainPost.slug}`} className="group">
              Read full article
              <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-none bg-accent flex items-center justify-center border border-border-strong">
            <div className="text-center text-white">
              <BarChart3 className="size-16 mx-auto mb-4 opacity-80" />
              <p className="font-heading text-lg font-semibold">
                SEO Success Story
              </p>
              <p className="font-sans text-sm opacity-80">
                340% Traffic Increase
              </p>
            </div>
          </div>

          {/* Floating stats cards */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-none p-4 shadow-lg border border-border-strong">
            <div className="flex items-center gap-3">
              <TrendingUp className="size-5 text-accent" />
              <div>
                <div className="font-heading text-sm font-medium text-ink">
                  Ranking Boost
                </div>
                <div className="font-mono text-xs text-ash">
                  Page 3 &rarr; #1
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white rounded-none p-4 shadow-lg border border-border-strong">
            <div className="flex items-center gap-3">
              <Star className="size-5 text-accent" />
              <div>
                <div className="font-heading text-sm font-medium text-ink">
                  Expert Tips
                </div>
                <div className="font-mono text-xs text-ash">
                  Proven Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function LatestArticles() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading className="text-accent">Latest Articles</Subheading>
          <Heading as="h2" className="mt-2">
            Stay ahead with cutting-edge SEO insights.
          </Heading>
          <p className="mt-6 font-sans text-xl text-slate max-w-3xl mx-auto">
            Discover the latest strategies, algorithm updates, and proven
            tactics that top SEO professionals use to dominate search rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.slice(1).map((post, index) => (
            <div
              key={post.slug}
              className="group relative bg-white rounded-none shadow-sm border border-border-strong hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full bg-cream flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-accent">
                  {index === 0 && (
                    <Search className="size-12 mx-auto mb-2 opacity-60" />
                  )}
                  {index === 1 && (
                    <FileText className="size-12 mx-auto mb-2 opacity-60" />
                  )}
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em]">
                    {post.category}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center bg-accent-soft px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs text-ash">
                    <Calendar className="size-3" />
                    {dayjs(post.publishedAt).format('MMM D')}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent transition-colors line-clamp-3">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 font-sans text-slate text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-cream border border-border flex items-center justify-center">
                      <User className="size-4 text-accent" />
                    </div>
                    <div className="font-sans text-sm text-ash">
                      {post.author.name}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-accent group-hover:gap-2 transition-all">
                    <span className="font-heading font-medium">Read more</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function Categories() {
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <Subheading className="text-accent">Explore by Topic</Subheading>
        <Heading as="h2" className="mt-2">
          Find exactly what you&apos;re looking for.
        </Heading>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Link
          href="/blog"
          className="group relative bg-white rounded-none p-6 text-center hover:shadow-md transition-all duration-300 border border-border-strong"
        >
          <div className="size-12 bg-cream border border-border rounded-none mx-auto mb-4 flex items-center justify-center">
            <BarChart3 className="size-6 text-accent" />
          </div>
          <h3 className="font-heading font-semibold text-ink group-hover:text-accent transition-colors">
            All Posts
          </h3>
          <p className="font-sans text-sm text-ash mt-1">
            Complete collection
          </p>
        </Link>

        {categories.map((category, index) => (
          <Link
            key={category}
            href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`}
            className="group relative bg-white rounded-none p-6 text-center hover:shadow-md transition-all duration-300 border border-border-strong"
          >
            <div className="size-12 bg-cream border border-border rounded-none mx-auto mb-4 flex items-center justify-center">
              {index % 3 === 0 && <Search className="size-6 text-accent" />}
              {index % 3 === 1 && <FileText className="size-6 text-accent" />}
              {index % 3 === 2 && (
                <TrendingUp className="size-6 text-accent" />
              )}
            </div>
            <h3 className="font-heading font-semibold text-ink group-hover:text-accent transition-colors">
              {category}
            </h3>
            <p className="font-sans text-sm text-ash mt-1">Latest insights</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" href="/blog/feed.xml" className="gap-2">
          <Rss className="size-4" />
          Subscribe to RSS Feed
        </Button>
      </div>
    </Container>
  )
}

function RecentPosts() {
  return (
    <Container className="py-24">
      <div className="mb-16">
        <Subheading className="text-accent">Recent Articles</Subheading>
        <Heading as="h2" className="mt-2">
          More insights to fuel your SEO success.
        </Heading>
      </div>

      <div className="space-y-8">
        {allPosts.slice(3).map((post, index) => (
          <div
            key={post.slug}
            className="group relative bg-white rounded-none p-8 shadow-sm border border-border-strong hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="aspect-square w-full rounded-none bg-cream flex items-center justify-center border border-border">
                  <div className="text-center text-accent">
                    {index % 3 === 0 && (
                      <Search className="size-8 mx-auto mb-2 opacity-60" />
                    )}
                    {index % 3 === 1 && (
                      <FileText className="size-8 mx-auto mb-2 opacity-60" />
                    )}
                    {index % 3 === 2 && (
                      <BarChart3 className="size-8 mx-auto mb-2 opacity-60" />
                    )}
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em]">
                      {post.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center bg-accent-soft px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 font-sans text-sm text-ash">
                    <Calendar className="size-4" />
                    {dayjs(post.publishedAt).format('MMMM D, YYYY')}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-ink group-hover:text-accent transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>

                <p className="font-sans text-slate leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cream border border-border flex items-center justify-center">
                      <User className="size-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-heading font-medium text-ink">
                        {post.author.name}
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                        SEO Expert
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-heading font-medium group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function Newsletter() {
  return (
    <div className="mx-2 my-24 bg-ink pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 border border-border-strong/20 bg-white/10 max-lg:mx-auto max-lg:max-w-xs">
              <div className="p-2">
                <div className="overflow-hidden border border-white/10">
                  <div className="aspect-3/4 w-full bg-cream flex items-center justify-center">
                    <div className="text-center text-accent">
                      <Rss className="size-16 mx-auto mb-4" />
                      <p className="font-heading text-lg font-semibold">
                        SEO Newsletter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <div className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <div>
                <Subheading dark>
                  Stay Ahead of the Competition
                </Subheading>
                <Heading as="h2" dark className="mt-2">
                  Get the latest SEO insights delivered weekly.
                </Heading>
                <p className="mt-6 font-sans text-xl text-white/60 leading-relaxed">
                  Join 12,000+ SEO professionals who trust our weekly newsletter
                  for the latest algorithm updates, ranking strategies, and
                  proven tactics that drive results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 border border-border-strong/20 bg-white/90 px-6 py-4 font-sans text-ink placeholder:text-ash focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white"
                  />
                  <Button className="rounded-none">Subscribe</Button>
                </div>

                <div className="max-lg:text-center lg:text-left">
                  <div className="flex items-center gap-4 font-sans text-sm text-white/60 mb-3 max-lg:justify-center">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span>Weekly insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span>No spam ever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="size-4 text-accent" />
                      <span>Free forever</span>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-white/40">
                    Join 12,000+ SEO professionals. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'SEO Blog',
          description: 'SEO insights and strategies...',
          url: 'https://theprojectseo.com/blog',
        }}
      />
      <Hero />
      <FeaturedPost />
      <LatestArticles />
      <Categories />
      <RecentPosts />
      <Newsletter />
      <Footer />
    </main>
  )
}
