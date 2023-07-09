import axiosInstance from "../../common/axios";

export const getCalendarDataApi = async () => {
  const { data } = await axiosInstance.get("/calendar-data");

  return data;
};
