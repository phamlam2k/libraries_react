import TableHead from "@mui/material/TableHead";
import { BaseCheckbox } from "../atoms/BaseCheckbox";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ProductSelectState, ProductSelectStatus } from "./TableMultiSelect";
import { useState } from "react";

interface EnhancedTableProps {
  productSelect: ProductSelectState;
  handleOnchangeCheckBox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function EnhancedTableHead({
  productSelect,
  handleOnchangeCheckBox,
}: EnhancedTableProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <BaseCheckbox
            indeterminate={productSelect.status === ProductSelectStatus.PARTIAL}
            checked={productSelect.status === ProductSelectStatus.ALL}
            onChange={handleOnchangeCheckBox}
          />
        </TableCell>
        <TableCell align="center">PRODUCT</TableCell>
        <TableCell align="center">PRICE</TableCell>
        <TableCell align="center">CREATE AT</TableCell>
        <TableCell align="center">ISSUED DATE</TableCell>
        <TableCell align="center">ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
}
