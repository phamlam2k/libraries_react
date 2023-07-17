// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCalendarDataPrisma } from "../../src/prisma/calendar";

export default async function calendar(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
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

  res.setHeader("Allow", ["GET"]);
}
