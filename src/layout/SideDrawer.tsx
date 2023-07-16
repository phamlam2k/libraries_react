import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { INavigate, navigate } from "../utils/navigate";
import Link from "next/link";

interface Props {
  isOpenDrawer: boolean;
  setIsOpenDrawer: (isOpenDrawer: boolean) => void;
}

const SideDrawer = ({ isOpenDrawer, setIsOpenDrawer }: Props) => {
  return (
    <Drawer
      anchor="left"
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <Box width={250}>
        <List>
          {navigate.map((item: INavigate) => (
            <Link key={item.name} href={item.path}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
