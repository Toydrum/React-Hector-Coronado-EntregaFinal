import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";

const DisableElevation = () => {
  const [items] = useContext(GatosContext);
  items.preventDefault();
  console.log(items);

  return (
    <Link to={"/shop"}>
      <Button variant="contained" disableElevation>
        Adoptar
      </Button>
    </Link>
  );
};

export default DisableElevation;
