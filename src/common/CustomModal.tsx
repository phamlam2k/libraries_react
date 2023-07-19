import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ReactElement } from "react";

interface IProps {
  title: string;
  isOpen: boolean;
  children: ReactElement;
  handleClose: () => void;
}

const CustomModal = ({ title, isOpen, children, handleClose }: IProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle textAlign="center">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
