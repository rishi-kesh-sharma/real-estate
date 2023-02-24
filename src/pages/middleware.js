import { NextResponse } from "next/server";
export function middleware(request) {
  const url = request.nextUrl.clone();
  console.log(url);
  if (url.pathname === "/dashboard") {
    url.pathname = "/dashboard/profile";
    return NextResponse.redirect(url);
  }
}
