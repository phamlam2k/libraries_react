import { withAuth } from "next-auth/middleware";
import { routerApis, routerPages } from "./src/utils/guard";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/api/calendar-data", "/api/product-data", "/calendar", "/table"],
};
