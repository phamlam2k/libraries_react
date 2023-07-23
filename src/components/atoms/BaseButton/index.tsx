import { Button, CircularProgress } from "@mui/material";
import * as React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabledStyle?: boolean;
  primaryStyle?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

const customStyle = {
  disabled: {
    minWidth: 150,
    backgroundColor: "#dbdbdd",
    color: "#b7afb5",
    margin: "0 5px",
  },
  primary: {
    minWidth: 150,
    backgroundColor: "#c466b6",
    color: "white",
    margin: "0 5px",
  },
};

export function BaseButton({
  children,
  onClick,
  disabledStyle,
  primaryStyle,
  style,
  disabled,
  loading,
  type,
}: Props) {
  let typeButton;
  if (disabledStyle) typeButton = customStyle.disabled;
  else if (primaryStyle) typeButton = customStyle.primary;

  return (
    <Button
      onClick={onClick}
      style={{ ...typeButton, ...style }}
      disabled={disabled}
      type={type}
    >
      {loading ? <CircularProgress size={20} /> : children}
    </Button>
  );
}
