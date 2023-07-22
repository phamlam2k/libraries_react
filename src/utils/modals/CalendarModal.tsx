import { Box, Dialog } from "@mui/material";
import {
  DialogContent,
  TextField,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

const CalendarModal = () => {
  const { register } = useForm();

  return (
    <DialogContent>
      <DialogContentText>Enter Event Name</DialogContentText>
      <TextField
        autoFocus
        margin="normal"
        {...register("title")}
        variant="standard"
        fullWidth
        sx={{ width: 500 }}
      />

      <Button>Confirm</Button>
    </DialogContent>
  );
};

export default CalendarModal;
