import axiosInstance from "../../common/axios";
import {
  IParamsGetProductDataPrisma,
  IProductCreateDataPrisma,
} from "../../prisma/product";

export const getCalendarDataApi = async ({
  page,
  limit,
  keyword,
}: IParamsGetProductDataPrisma) => {
  const { data } = await axiosInstance.get(
    `/calendar-data?page=${page}&limit=${limit}&keyword=${keyword}`
  );

  return data;
};

export const createCalendarDataApi = async (
  formData: IProductCreateDataPrisma
) => {
  const { data } = await axiosInstance.post("/calendar-data", formData);

  return data;
};
