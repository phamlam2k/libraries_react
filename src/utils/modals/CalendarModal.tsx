import {Box, Dialog} from "@mui/material";
import {DialogContent, TextField, DialogContentText, DialogActions, Button} from "@mui/material";

const CalendarModal = () => {
  return  <DialogContent>
    <DialogContentText>
      Enter Event Name
    </DialogContentText>
    <TextField
        autoFocus
        margin="normal"
        id="name"
        label="Event Name"
        type="email"
        variant="standard"
        fullWidth
        sx={{ width: 500}}
    />
    <Button>Confirm</Button>
    </DialogContent>
};

export default CalendarModal;
