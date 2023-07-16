// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getCalendarDataPrisma } from "../../src/prisma/calendar";
import {
  createProduct,
  deleteManyProduct,
  deleteProduct,
  getProductDataPrisma,
} from "../../src/prisma/product";

export default async function product(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      const { page, limit, keyword } = req.query;
      const pageQuery = page ?? 1;
      const limitQuery = limit ?? 10;
      const keywordQuery = String(keyword ?? "");
      const { product, error } = await getProductDataPrisma({
        keyword: keywordQuery,
        page: Number(pageQuery),
        limit: Number(limitQuery),
      });

      if (error) throw new Error(error as string);

      return res.status(200).json({
        product,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const { name, price } = req.body;

      const { message, error } = await createProduct({
        name,
        price,
      });

      if (error) {
        return res.status(400).json({
          message: error,
        });
      }

      return res.status(200).json({
        message,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const { id, ids } = req.body;

      if (id) {
        const { message, error } = await deleteProduct(id);

        if (error) {
          return res.status(400).json({
            message: error,
          });
        }

        return res.status(200).json({
          message,
        });
      }

      if (ids) {
        const { message, error } = await deleteManyProduct(ids);

        if (error) {
          return res.status(400).json({
            message: error,
          });
        }

        return res.status(200).json({
          message,
        });
      }
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
}
