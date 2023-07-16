import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { ReactElement } from "react";

export interface INavigate {
  name: string;
  path: string;
  icon: ReactElement;
}

export const navigate: INavigate[] = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <CalendarMonthIcon />,
  },
];
