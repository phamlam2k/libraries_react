import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken";
import { SECRET_AUTH } from "../../../src/utils/guard";
import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import axiosInstance from "../../../src/common/axios";

const authOptions = (req: NextApiRequest, res: NextApiResponse) => {
  return {
    // Configure one or more authentication providers
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? "b4078c47d412f5f86c2a",
        clientSecret:
          process.env.GITHUB_SECRET_ID ??
          "ca2475890029e02f9a295c39b263661415eeccdf",
      }),
    ],
    secret: SECRET_AUTH,
    callbacks: {
      async session({ session, token }: any) {
        session.user.accessToken = token.accessToken;

        return session;
      },
      jwt: async ({ token }: any) => {
        const accessToken = jwt.sign(token, SECRET_AUTH, {
          algorithm: "HS256",
        });

        return { ...token, accessToken };
      },
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res));
};
