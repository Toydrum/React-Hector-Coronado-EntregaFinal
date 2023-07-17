import React from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";

const ShopPage = () => {
  return (
    <>
      <div>
        <h1>ShopPage</h1>
        <form>
          <TextField name="color" className="campo" />
          <TextField name="donación" className="campo" />
          <TextField name="cantidad" className="campo" />
        </form>
      </div>
    </>
  );
};

export default ShopPage;
