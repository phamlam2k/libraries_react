import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import CustomToolbar from "./customToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useCalendarData from "../../hooks/useCalendarData";
import { IParamsGetCalendarDataPrisma } from "../../prisma/calendar";
const localizer = dayjsLocalizer(dayjs);

const CalendarContent = () => {
  const [eventsData, setEventsData] = useState<any[]>([]);
  const [paramsSearch, setParamsSearch] =
    useState<IParamsGetCalendarDataPrisma>({
      page: 1,
      limit: 10,
      keyword: "",
    });

  const { data } = useCalendarData(paramsSearch);

  const handleSelect = ({ start, end }: any) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };

  return (
    <div>
      <Calendar
        views={["day", "agenda", "week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh", width: "100%", backgroundColor: "white" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default CalendarContent;
