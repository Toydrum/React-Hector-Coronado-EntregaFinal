import React from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";

const ShopPage = () => {
  return (
    <>
      <div className="caja">
        <h1 className="titulo">ShopPage</h1>
        <form>
          <TextField name="color" className="campo" placeholder="color" />
          <TextField name="donación" className="campo" placeholder="donación" />
          <TextField name="cantidad" className="campo" placeholder="cantidad" />
        </form>
      </div>
    </>
  );
};

export default ShopPage;
