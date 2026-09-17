import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.redirect('https://seocompanyphilippines.com/book/?brand=tps', 307)
}
