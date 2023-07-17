import Button from "@mui/material/Button";
import { useContext, useHistory } from "react";
import { GatosContext } from "../../context/GatosContext";
import "./Button.css";

const DisableElevation = () => {
  const [items, setItems] = useContext(GatosContext);
  const history = useHistory();

  const handleClick = () => {
    // Aquí puedes crear el nuevo objeto gato con los datos que necesitas
    const nuevoGato = {
      id: "ID_GENERADO", // Cambia esto con el ID generado
      color: "Blanco", // Cambia esto con los datos reales
      donacion: 50, // Cambia esto con los datos reales
    };

    // Agregar el nuevo gato al contexto
    setItems([...items, nuevoGato]);

    // Redirigir a la página de detalles con el ID del nuevo gato
    history.push(`/detail/${nuevoGato.id}`);
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
