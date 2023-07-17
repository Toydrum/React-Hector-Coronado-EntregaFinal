import Button from "@mui/material/Button";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";
import "./Button.css";

const DisableElevation = ({ data }) => {
  const [items, setItems] = useContext(GatosContext);

  const handleClick = () => {
    const nuevoGato = {
      id: "ID_GENERADO", // Cambia esto con el ID generado
      color: "Blanco", // Cambia esto con los datos reales
      donacion: "", // Cambia esto con los datos reales
    };
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

export default DisableElevation;
