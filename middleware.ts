import { withAuth } from "next-auth/middleware";
import { SECRET_AUTH, routerApis, routerPages } from "./src/utils/guard";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { verifyToken } from "./src/utils/jwt";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (routerApis.includes(req.nextUrl.pathname)) {
      const token = req.nextauth.token as { accessToken: string };

      if (!verifyToken(token.accessToken)) {
        return NextResponse.redirect("/login");
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/calendar", "/table"],
};
