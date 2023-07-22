import Checkbox from "@mui/material/Checkbox";
import * as React from "react";

type Props = {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  checked?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  indeterminate?: boolean;
};
export function BaseCheckbox({
  onChange,
  checked,
  inputProps,
  indeterminate,
}: Props) {
  const defaultStyle = { color: "#c466b6" };
  return (
    <Checkbox
      style={defaultStyle}
      indeterminate={indeterminate}
      checked={checked}
      onChange={onChange}
      inputProps={inputProps}
    />
  );
}
