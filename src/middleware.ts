import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Auth_Middleware
  const isLoggedIn = true; // ! Just boolean until i implement the authentication feature
  if (isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/logged-in";
    // Redirect to AlreadyLoggedIn Page
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
