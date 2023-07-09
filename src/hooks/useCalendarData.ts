import { useQuery } from "@tanstack/react-query";
import { getCalendarDataApi } from "../utils/api/calendar";

const useCalendarData = () => {
  return useQuery({
    queryKey: [],
    queryFn: () => getCalendarDataApi(),
  });
};

export default useCalendarData;
