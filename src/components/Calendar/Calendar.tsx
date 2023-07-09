import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = dayjsLocalizer(dayjs);

const CalendarContent = () => {
  const [eventsData, setEventsData] = useState<any[]>([]);

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
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default CalendarContent;
