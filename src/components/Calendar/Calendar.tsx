import dayjs from "dayjs";
import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import CustomToolbar from "./customToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useCalendarData from "../../hooks/useCalendarData";
import { IParamsGetCalendarDataPrisma } from "../../prisma/calendar";
import { Dialog, DialogContentText } from "@mui/material";
import CustomModal from "../../common/CustomModal";
import extendedDayJs from "../../utils/dayjs";
import CalendarModal from "../../utils/modals/CalendarModal";
const localizer = dayjsLocalizer(dayjs);

interface IModalInfo {
  open: boolean;
  startDate: Date;
  endDate: Date;
}

const CalendarContent = () => {
  const [eventsData, setEventsData] = useState<any[]>([]);
  const [openModalInfo, setOpenModalInfo] = useState<IModalInfo>({
    open: false,
    startDate: extendedDayJs().toDate(),
    endDate: extendedDayJs().toDate(),
  });

  const [paramsSearch, setParamsSearch] =
    useState<IParamsGetCalendarDataPrisma>({
      page: 1,
      limit: 10,
      keyword: "",
    });

  const { data } = useCalendarData(paramsSearch);

  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    setOpenModalInfo({
      open: true,
      startDate: start,
      endDate: end,
    });
  };

  const handleCloseModal = () => {
    setOpenModalInfo({
      open: false,
      startDate: extendedDayJs().toDate(),
      endDate: extendedDayJs().toDate(),
    });
  };

  const handleSelectedEvent = (event: any) => {
    console.log("Alo", event);
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
        onSelectEvent={(event) => handleSelectedEvent(event)}
        onSelectSlot={handleSelect}
        components={{
          toolbar: CustomToolbar,
        }}
      />
      <CustomModal
        title="Create Calendar"
        isOpen={openModalInfo.open}
        handleClose={handleCloseModal}
      >
        <CalendarModal />
      </CustomModal>
    </div>
  );
};

export default CalendarContent;
