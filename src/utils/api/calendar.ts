import axiosInstance from "../../common/axios";
import {
  IParamsCreateCalendarDataPrisma,
  IParamsGetCalendarDataPrisma,
} from "../../prisma/calendar";

export const getCalendarDataApi = async ({
  page,
  limit,
  keyword,
  accessToken,
}: IParamsGetCalendarDataPrisma) => {
  const { data } = await axiosInstance.get(
    `/calendar-data?page=${page}&limit=${limit}&keyword=${keyword}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const createCalendarDataApi = async (
    accessToken: string | null | undefined,
  formData: IParamsCreateCalendarDataPrisma
) => {
  const { data } = await axiosInstance.post("/calendar-data", formData,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
  );

  return data;
};

export const deleteCalendarDataApi = async (accessToken: string | null | undefined, id: number) => {
  const { data } = await axiosInstance.delete(`/calendar-data`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: { id },
  });

  return data;
};
