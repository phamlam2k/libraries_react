import dayjs from "dayjs";
import React, {useState} from "react";
import {Calendar, dayjsLocalizer} from "react-big-calendar";
import CustomToolbar from "./customToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useCalendarData from "../../hooks/useCalendarData";
import {IParamsGetCalendarDataPrisma} from "../../prisma/calendar";
import CustomModal from "../../common/CustomModal";
import extendedDayJs from "../../utils/dayjs";
import CalendarModal from "../../utils/modals/CalendarModal";
import CalendarSelectModal from "../../utils/modals/CalendarSelectModal";

const localizer = dayjsLocalizer(dayjs);

interface IModalInfo {
    open: boolean;
    startDate: Date;
    endDate: Date;
}

interface IModalSelect {
    open: boolean;
    title: string;
    description: string;
}

const CalendarContent = () => {
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

    const {data} = useCalendarData(paramsSearch);

    const event = [
        {
            title: "New Generation",
            start: "2023-07-21T00:00:00+07:00",
            end: "2023-07-21T23:59:59+07:00",
            allDay: true,
            description: "VNPT",
            resource: {
                userId: "ec1f6076-9fcc-48c6-b0e9-e39dbc29557x",
                eventType: "visaExtensionWorkPermit",
            },
        },
    ];

    const handleSelect = ({start, end}: { start: Date; end: Date }) => {
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
                style={{height: "100vh", width: "100%", backgroundColor: "white"}}
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
                <CalendarModal/>
            </CustomModal>
            <CustomModal
                title={openModalSelect.title}
                isOpen={openModalSelect.open}
                description={openModalSelect.description}
                handleClose={handleCloseModalSelect}
            >
                <CalendarSelectModal/>
            </CustomModal>
        </div>
    );
};

export default CalendarContent;
