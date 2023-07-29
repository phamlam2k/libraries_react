import React, { useMemo, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useSession } from "next-auth/react";
import { ISODateString } from "next-auth";
import CustomToolbar from "./customToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useCalendarData from "../../hooks/useCalendarData";
import {
  IParamsCreateCalendarDataPrisma,
  IParamsGetCalendarDataPrisma,
} from "../../prisma/calendar";
import CustomModal from "../../common/CustomModal";
import extendedDayJs from "../../utils/dayjs";
import CalendarModal from "../../utils/modals/CalendarModal";
import CalendarSelectModal from "../../utils/modals/CalendarSelectModal";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

export interface IModalInfo {
  open: boolean;
  startDate: Date;
  endDate: Date;
}

export interface IModalSelect {
  open: boolean;
  title: string;
  description: string;
}

interface ISessions {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    accessToken?: string | null;
  };
  expires: ISODateString;
}

const CalendarContent = () => {
  const { data: session } = useSession() as {
    data: ISessions;
  };

  const [eventsData, setEventsData] = useState<any[]>([]);
  const [openModalInfo, setOpenModalInfo] = useState<IModalInfo>({
    open: false,
    startDate: extendedDayJs().toDate(),
    endDate: extendedDayJs().toDate(),
  });
  const [openModalSelect, setOpenModalSelect] = useState<IModalSelect>({
    open: false,
    title: "",
    description: "",
  });

  const [paramsSearch, setParamsSearch] =
    useState<IParamsGetCalendarDataPrisma>({
      page: 1,
      limit: 10,
      keyword: "",
    });

  const { data } = useCalendarData({
    ...paramsSearch,
    accessToken: session?.user?.accessToken,
  });

  const event = useMemo(() => {
    if (!data) return [];

    return data.calendar.map((item: IParamsCreateCalendarDataPrisma) => ({
      title: item.title,
      start: item.start_date,
      end: item.end_date,
      description: item.description,
    }));
  }, [data]);

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
    console.log(event);
    setOpenModalSelect({
      open: true,
      title: event.title,
      description: event.description,
    });
  };

  const handleCloseModalSelect = () => {
    setOpenModalSelect({
      open: false,
      title: "",
      description: "",
    });
  };

  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={event}
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
        <CalendarModal openModalInfo={openModalInfo} />
      </CustomModal>
      <CustomModal
        title={openModalSelect.title}
        isOpen={openModalSelect.open}
        handleClose={handleCloseModalSelect}
      >
        <CalendarSelectModal description={openModalSelect.description} />
      </CustomModal>
    </div>
  );
};

export default CalendarContent;
