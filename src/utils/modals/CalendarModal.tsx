import { Box, Dialog } from "@mui/material";
import { DialogContent, DialogContentText, Button } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import BaseTextFieldForm from "../../components/atoms/BaseTextFieldForm";
import { BaseButton } from "../../components/atoms/BaseButton";

interface IField {
  title: string;
  description: string;
}

const CalendarModal = () => {
  const methods = useForm<IField>();

  const handleCreateCalendar: SubmitHandler<IField> = (data) => {
    console.log(data);
  };

  return (
    <DialogContent>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleCreateCalendar)}>
          <BaseTextFieldForm keyTextField="title" label="Title" />
          <BaseTextFieldForm
            keyTextField="description"
            label="Description"
            customStyle={{ marginTop: 3 }}
          />

          <BaseButton
            type="submit"
            primaryStyle
            style={{ display: "block", margin: "15px auto" }}
          >
            Confirm
          </BaseButton>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default CalendarModal;
