import { NextResponse } from 'next/server'

export function middleware() {
  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next()
  }

  return new NextResponse(null, {
    status: 404,
    headers: {
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  })
}

export const config = {
  matcher: ['/admin/:path*', '/animation-demo/:path*', '/demo/:path*'],
}
