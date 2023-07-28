import axiosInstance from "../../common/axios";
import {
  IParamsCreateCalendarDataPrisma,
  IParamsGetCalendarDataPrisma,
} from "../../prisma/calendar";

export const getCalendarDataApi = async ({
  page,
  limit,
  keyword,
}: IParamsGetCalendarDataPrisma) => {
  const { data } = await axiosInstance.get(
    `/calendar-data?page=${page}&limit=${limit}&keyword=${keyword}`
  );

  return data;
};

export const createCalendarDataApi = async (
  formData: IParamsCreateCalendarDataPrisma
) => {
  const { data } = await axiosInstance.post("/calendar-data", formData);

  return data;
};
