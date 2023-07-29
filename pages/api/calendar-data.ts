// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  createCalendarDataPrisma,
  getCalendarDataPrisma,
  updateCalendarDataPrisma,
} from "../../src/prisma/calendar";
import { verifyToken } from "../../src/utils/jwt";

export default async function calendar(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const accessToken = req.headers.authorization?.split(" ")[1] as string;

  if (!verifyToken(accessToken) || !accessToken)
    return res.status(401).json({ status: 0, message: "Unauthenization" });

  if (req.method === "GET") {
    try {
      const { page, limit, keyword } = req.query;
      const pageQuery = page ?? 1;
      const limitQuery = limit ?? 10;
      const keywordQuery = String(keyword ?? "");

      const { calendar, error } = await getCalendarDataPrisma({
        keyword: keywordQuery,
        page: Number(pageQuery),
        limit: Number(limitQuery),
      });

      if (error) throw new Error(error as string);

      return res.status(200).json({
        calendar,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "POST") {
    try {
      const { title, description, start_date, end_date } = req.body;

      const { calendar, error, message } = await createCalendarDataPrisma({
        title,
        description,
        start_date,
        end_date,
      });

      if (error) throw new Error(error as string);

      return res.status(200).json({
        calendar,
        message,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "PUT") {
    try {
      const { id, title, description, start_date, end_date } = req.body;

      const { calendar, error, message } = await updateCalendarDataPrisma({
        id,
        title,
        description,
        start_date,
        end_date,
      });

      if (error) throw new Error(error as string);

      return res.status(200).json({
        calendar,
        message,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST", "PUT"]);
}
