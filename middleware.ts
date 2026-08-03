import { NextResponse, type NextRequest } from 'next/server'
import { AUTH_COOKIE_NAME } from '@/lib/auth-constants'

const protectedPaths = ['/dashboard', '/onboarding', '/admin']

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value

  console.log('Value Middleware request token:', request.cookies.get(AUTH_COOKIE_NAME)) // Debugging line

  console.log('Middleware request cookies:', request.cookies) // Debugging line
  const pathname = request.nextUrl.pathname

  console.log('Middleware request pathname:', pathname) // Debugging line
  console.log('Middleware request token 5555:', token) // Debugging line

  const needsAuth = protectedPaths.some((path) => pathname.startsWith(path))
  if (needsAuth && !token) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  const isAuthPage = pathname.startsWith('/auth/')
  if (isAuthPage && token) {
    console.log('Middleware: User is authenticated, redirecting to dashboard') // Debugging line
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  console.log('Middleware: No redirection needed, proceeding to next') // Debugging line
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/onboarding/:path*', '/auth/:path*'],
}
