import { DialogContent, DialogContentText, DialogActions, Button} from "@mui/material";

interface IProps {
  description: string;
  onDelete: () => void;
}

const CalendarSelectModal = ({ description, onDelete }: IProps) => {
  return (
    <DialogContent sx={{ width: 500 }}>
      <DialogContentText textAlign="center">{description}</DialogContentText>
        <DialogActions>
            <Button onClick={onDelete}>Delete</Button>
        </DialogActions>
    </DialogContent>
  );
};

export default CalendarSelectModal;
