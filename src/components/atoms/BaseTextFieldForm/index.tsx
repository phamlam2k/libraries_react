import { ErrorMessage } from "@hookform/error-message";
import { Box, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface Props {
  label: string;
  keyTextField: string;
  customStyle?: React.CSSProperties;
  styleField?: React.CSSProperties;
}

const BaseTextFieldForm = ({
  label,
  keyTextField,
  customStyle,
  styleField,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={customStyle}>
      <TextField
        {...register(keyTextField, {
          required: "This field is required",
        })}
        fullWidth
        label={label}
        error={!!errors[keyTextField]}
        style={styleField}
        {...props}
      />
      <ErrorMessage
        errors={errors}
        name={keyTextField}
        render={({ message }) => <Typography color="red">{message}</Typography>}
      />
    </Box>
  );
};

export default BaseTextFieldForm;
