import dayjs from "dayjs";
import React, {useState} from "react";
import {Button, IconButton} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import {ButtonGroup} from "@mui/material";

function CustomToolbar(props: any) {
    const [viewState, setViewState] = useState("month");
    const [StudyTimechecked, setStudyTimechecked] = useState(false)
    const getCustomToolbar = () => {
        // const toolbarDate = props.date;
        const goToDayView = () => {
            props.onView("day");
            setViewState("day");
        };
        const goToWeekView = () => {
            props.onView("week");
            setViewState("week");
        };
        const goToMonthView = () => {
            props.onView("month");
            setViewState("month");
        };
        const goToAgendaView = () => {
            props.onView("agenda");
            setViewState("agenda");
        };
        const goToBack = () => {
            let view = viewState;
            let mDate = props.date;
            let newDate;
            if (view === "month") {
                newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
            } else if (view === "week") {
                newDate = new Date(
                    mDate.getFullYear(),
                    mDate.getMonth(),
                    mDate.getDate() - 7,
                    1
                );
            } else {
                newDate = new Date(
                    mDate.getFullYear(),
                    mDate.getMonth(),
                    mDate.getDate() - 1,
                    1
                );
            }
            props.onNavigate("prev", newDate);
        };
        const goToNext = () => {
            let view = viewState;
            let mDate = props.date;
            let newDate;
            if (view === "month") {
                newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
            } else if (view === "week") {
                newDate = new Date(
                    mDate.getFullYear(),
                    mDate.getMonth(),
                    mDate.getDate() + 7,
                    1
                );
            } else {
                newDate = new Date(
                    mDate.getFullYear(),
                    mDate.getMonth(),
                    mDate.getDate() + 1,
                    1
                );
            }
            props.onNavigate("next", newDate);
        };

        const goToToday = () => {
            const now = new Date();
            props.date.setMonth(now.getMonth());
            props.date.setYear(now.getFullYear());
            props.date.setDate(now.getDate());
            props.onNavigate("current");
        };

        const goToBackYear = () => {
            let mDate = props.date;
            let newDate = new Date(mDate.getFullYear() - 1, 1);
            props.onNavigate("prev", newDate);
        };

        const goToNextYear = () => {
            let mDate = props.date;
            let newDate = new Date(mDate.getFullYear() + 1, 1);
            props.onNavigate("next", newDate);
        };

        const month = () => {
            const date = dayjs(props.date);
            let month = date.format("MMMM");
            let day = date.format("D");
            let year= date.format("YYYY")

            return (
                <span className="rbc-toolbar-label rbc-date">
          <i className="far fa-calendar"></i> <span>{`${month} ${day}`}</span>
        </span>
            );
        };
        const year = () => {
            const date = dayjs(props.date);
            let year = date.format("YYYY");

            return (
                <span className="rbc-btn-group">
          {viewState === "month" && (
              <button type="button" onClick={goToBackYear}>
                  <span className="prev-icon">&#8249;&#8249;</span>
              </button>
          )}
                    <span className="rbc-toolbar-label">{year}</span>
                    {viewState === "month" && (
                        <button type="button" onClick={goToNextYear}>
                            <span className="prev-icon">&#8250;&#8250;</span>
                        </button>
                    )}
        </span>
            );
        };

        const day = () => {
            let view = viewState;
            const date = dayjs(props.date);
            let day;
            if (view === "day") {
                day = date.format("ddd") + " " + date.format("Do");
            }
            return <span className="rbc-toolbar-label">{day}</span>;
        };

        return (
                <Grid container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mt: 2, mb: 2}}
                >
          <Grid sx={{ ml: 6, color: '#1876d1' }}>
              <Button sx={{}} onClick={goToToday} variant="contained">Today</Button>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 1, color: '#1876d1', ml: 2}}
              onClick={goToBack}
          >
            <ArrowBackIosNewIcon/>
          </IconButton>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{color: '#1876d1'}}
              onClick={goToNext}
          >
            <ArrowForwardIosIcon/>
          </IconButton>
          </Grid>
                <Grid>
                    {month()}
                </Grid>
                    <Grid sx={{ mr: 4 }}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button className="" onClick={goToMonthView}>
             Month
            </Button>
            <Button className="" onClick={goToDayView}>
              Day
            </Button>
            <Button className="" onClick={goToWeekView}>
              Week
            </Button>
            <Button className="" onClick={goToAgendaView}>
              Agenda
            </Button>
                            </ButtonGroup>
          </Grid>
                </Grid>
        );
    };

    return <>{getCustomToolbar()}</>;
}

export default CustomToolbar;