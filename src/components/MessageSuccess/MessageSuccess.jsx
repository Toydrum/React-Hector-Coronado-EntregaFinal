import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types"; // Importa PropTypes

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MessageSuccess = ({ purchaseID }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Mira tu ID de compra
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`El ID de su compra es: ${purchaseID}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¡Gracias por su compra!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>regresar</Button>
          <Button onClick={handleClose}>continuar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// Define la validación de PropTypes para la prop 'purchaseID' como string y no sea una cadena vacía
MessageSuccess.propTypes = {
  purchaseID: PropTypes.string.isRequired,
};

export default MessageSuccess;
