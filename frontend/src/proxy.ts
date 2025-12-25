import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/documents", "/generate"];

export function proxy(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // 1. Redirect to login if accessing protected route without token
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Redirect to dashboard if accessing login/signup while already logged in
  if (pathname === "/login" || pathname === "/signup") {
    if (token) {
      const dashboardUrl = new URL("/dashboard", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}
