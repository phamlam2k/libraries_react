// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";
import { SECRET_AUTH } from "../../src/utils/guard";
import { verifyToken } from "../../src/utils/jwt";

export default function login(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    const { accessToken } = req.body;

    if (!verifyToken(accessToken))
      return res.status(401).json({ status: 0, message: "Login Failed" });

    setCookie("accessToken", accessToken, { req });
    return res.status(200).json({ status: 1, message: "Login Sucessfully" });
  }
}
