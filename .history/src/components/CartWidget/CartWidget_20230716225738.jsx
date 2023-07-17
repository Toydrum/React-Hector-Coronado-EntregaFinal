import { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import { Link } from "react-router-dom";
import { GatosProvider } from "./context/GatosContext";

const CartWidget = () => {
  return (
    <div style={{ color: "black" }}>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
