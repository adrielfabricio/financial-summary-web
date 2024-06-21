import { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  console.log("Hello from middleware!", request.nextUrl.pathname)
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
}
