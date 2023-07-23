import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "b4078c47d412f5f86c2a",
      clientSecret:
        process.env.GITHUB_SECRET_ID ??
        "ca2475890029e02f9a295c39b263661415eeccdf",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "88e39105caf727b155c596cb8135c9cd",
};

export default NextAuth(authOptions);
