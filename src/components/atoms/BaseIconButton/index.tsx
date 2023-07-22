import React from "react";
import { IconButton } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}

export const BaseIconButton: React.FC<Props> = ({
  children,
  onClick,
  style,
}) => {
  return (
    <IconButton style={style} onClick={onClick} sx={{ p: "10px" }}>
      {children}
    </IconButton>
  );
};
