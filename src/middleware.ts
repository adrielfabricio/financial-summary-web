import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  console.log("Hello from middleware!", request.nextUrl.pathname)

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL("/dashboard/finance/summary", request.nextUrl.origin)
    )
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
}
