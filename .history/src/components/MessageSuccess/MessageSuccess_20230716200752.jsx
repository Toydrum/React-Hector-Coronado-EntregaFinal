import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        ¡Gracias por su compra! Su ID de transacción es:
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
