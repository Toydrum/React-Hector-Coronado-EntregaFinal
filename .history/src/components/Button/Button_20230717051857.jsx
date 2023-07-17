import Button from "@mui/material/Button";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";
import "./Button.css";

const DisableElevation = () => {
  const [items, setItems, agregarGato] = useContext(GatosContext);

  const handleClick = () => {
    // Aquí puedes crear el nuevo objeto gato con los datos que necesitas
    const nuevoGato = {
      id: "", // Cambia esto con el ID generado
      color: "", // Cambia esto con los datos reales
      donacion: "", // Cambia esto con los datos reales
    };

    // Agregar el nuevo gato al contexto
    setItems([...items, nuevoGato]);
  };
  console.log(items);
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
