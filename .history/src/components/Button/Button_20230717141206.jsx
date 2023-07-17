import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";
import "./Button.css";

const DisableElevation = ({ gato }) => {
  const [, , agregarGato] = useContext(GatosContext);

  const handleClick = () => {
    agregarGato(gato);
  };

  return (
    <Button
      className="adopt"
      variant="contained"
      disableElevation
      onClick={handleClick}
    >
      Adoptar
    </Button>
  );
};

DisableElevation.propTypes = {
  gato: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    donacion: PropTypes.number.isRequired,
    // Añade otras propiedades aquí si es necesario
  }).isRequired,
};

export default DisableElevation;
