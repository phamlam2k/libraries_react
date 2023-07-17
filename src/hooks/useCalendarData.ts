import { useQuery } from "@tanstack/react-query";
import { getCalendarDataApi } from "../utils/api/calendar";
import { IParamsGetCalendarDataPrisma } from "../prisma/calendar";

const useCalendarData = ({
  page,
  limit,
  keyword,
}: IParamsGetCalendarDataPrisma) => {
  return useQuery({
    queryKey: [],
    queryFn: () => getCalendarDataApi({ page, limit, keyword }),
  });
};

export default useCalendarData;
