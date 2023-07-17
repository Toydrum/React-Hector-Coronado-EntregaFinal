import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSuccess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        ¡Gracias por su compra! Su ID de transacción es: {purchaseID}
      </Alert>
    </Stack>
  );
};

// Define la validación de PropTypes para la prop 'purchaseID'
MessageSuccess.propTypes = {
  purchaseID: PropTypes.string.isRequired,
};

export default MessageSuccess;
