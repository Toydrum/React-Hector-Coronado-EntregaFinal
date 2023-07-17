import React from "react";
import Alert from "@mui/material/Alert"; // Utiliza llaves en lugar de corchetes
import Stack from "@mui/material/Stack"; // Utiliza llaves en lugar de corchetes

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        ¡Gracias por su compra! Su ID de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSuccess;
