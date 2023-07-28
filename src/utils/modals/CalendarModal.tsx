import { DialogContent } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import BaseTextFieldForm from "../../components/atoms/BaseTextFieldForm";
import { BaseButton } from "../../components/atoms/BaseButton";
import { IModalInfo } from "../../components/Calendar/Calendar";
import extendedDayJs from "../dayjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCalendarDataApi } from "../api/calendar";
import { IParamsCreateCalendarDataPrisma } from "../../prisma/calendar";
import { QUERY_KEYS } from "../keys";

interface Props {
  openModalInfo: IModalInfo;
}

interface IField {
  title: string;
  description: string;
}

const CalendarModal = ({ openModalInfo }: Props) => {
  const methods = useForm<IField>();
  const queryClient = useQueryClient();

  const createCalendar = useMutation({
    mutationFn: (data: IParamsCreateCalendarDataPrisma) =>
      createCalendarDataApi(data),
    onSuccess: (data: { message: string }) => {
      alert(data.message);
      queryClient.invalidateQueries([QUERY_KEYS.CALENDAR_LIST]);
    },
  });

  const handleCreateCalendar: SubmitHandler<IField> = (data) => {
    createCalendar.mutate({
      title: data.title,
      description: data.description,
      start_date: openModalInfo.startDate,
      end_date: openModalInfo.endDate,
    });
  };

  return (
    <DialogContent sx={{ width: 500 }}>
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
