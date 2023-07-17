import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";

const DisableElevation = () => {
  const [items, setItems, agregarGato] = useContext(GatosContext);

  const handleClick = () => {
    // Aquí puedes crear el nuevo objeto gato con los datos que necesitas
    const nuevoGato = {
      id: "ID_GENERADO", // Cambia esto con el ID generado
      color: "Blanco", // Cambia esto con los datos reales
      donacion: 50, // Cambia esto con los datos reales
    };

    // Agregar el nuevo gato al contexto
    agregarGato(nuevoGato);
  };

  return (
    <Link to={"/shop"}>
      <Button variant="contained" disableElevation onClick={handleClick}>
        Adoptar
      </Button>
    </Link>
  );
};

export default DisableElevation;
