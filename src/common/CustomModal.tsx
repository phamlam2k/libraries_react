import {Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {ReactElement} from "react";

interface IProps {
    title: string;
    isOpen: boolean;
    children: ReactElement;
    handleClose: () => void;
    description?: string;
}

const CustomModal = ({title, isOpen, children, handleClose, description}: IProps) => {
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle textAlign="center">{title}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default CustomModal;
