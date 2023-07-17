import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div style={{ color: "black" }}>
      <ShoppingCartIcon />
    </div>
  );
};

export default CartWidget;
