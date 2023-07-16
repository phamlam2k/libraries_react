import exp from "constants";
import axiosInstance from "../../common/axios";
import {
  IParamsGetProductDataPrisma,
  IProductCreateDataPrisma,
} from "../../prisma/product";

export const getProductDataApi = async ({
  page,
  limit,
  keyword,
}: IParamsGetProductDataPrisma) => {
  const { data } = await axiosInstance.get(
    `/product-data?page=${page}&limit=${limit}&keyword=${keyword}`
  );

  return data;
};

export const createProductDataApi = async (
  params: IProductCreateDataPrisma
) => {
  const { data } = await axiosInstance.post("/product-data", params);

  return data;
};

export const deleteProductDataApi = async (id: number) => {
  const { data } = await axiosInstance.delete(`/product-data`, {
    data: { id },
  });

  return data;
};

export const deleteManyProductDataApi = async (ids: number[]) => {
  const { data } = await axiosInstance.delete(`/product-data`, {
    data: { ids },
  });

  return data;
};
