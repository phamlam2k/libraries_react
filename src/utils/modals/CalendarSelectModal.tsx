import {DialogContent, DialogContentText} from "@mui/material";

interface IProps {
    description: string;
}

const CalendarModal = ({description}: IProps) => {

    return <DialogContent sx={{width: 500}}>
        <DialogContentText textAlign="center">{description}
        </DialogContentText>
    </DialogContent>
};

export default CalendarModal;
