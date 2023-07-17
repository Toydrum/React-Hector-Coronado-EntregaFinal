import Button from "@mui/material/Button";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";
import "./Button.css";

const DisableElevation = () => {
  const [items, setItems] = useContext(GatosContext);

  const handleClick = () => {
    setItems(() => {});
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
