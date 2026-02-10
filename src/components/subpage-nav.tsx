import { Container } from '@/components/container'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SubpageLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface SubpageNavProps {
  heading: string
  subpages: SubpageLink[]
}

export function SubpageNav({ heading, subpages }: SubpageNavProps) {
  return (
    <div className="bg-cream py-16 border-t border-b border-border">
      <Container>
        <h2 className="font-heading text-2xl font-semibold text-ink mb-8 text-center lg:text-left">
          {heading}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subpages.map((subpage, index) => (
            <Link
              key={index}
              href={subpage.href}
              className="group flex items-center justify-between px-5 py-4 bg-white border border-border-strong rounded-none hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                {subpage.icon && (
                  <div className="size-10 bg-accent-soft rounded-none flex items-center justify-center flex-shrink-0">
                    <subpage.icon className="size-5 text-accent" />
                  </div>
                )}
                <span className="font-heading font-medium text-ink group-hover:text-accent transition-colors">
                  {subpage.title}
                </span>
              </div>
              <ArrowRight className="size-4 text-slate group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
