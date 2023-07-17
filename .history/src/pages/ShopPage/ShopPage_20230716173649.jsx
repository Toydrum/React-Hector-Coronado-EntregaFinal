import React from "react";
import TextField from "@mui/icons-material";

const ShopPage = () => {
  return (
    <>
      <div>
        <h1>ShopPage</h1>
        <form>
          <TextField name="color" />
          <TextField name="donación" />
          <TextField name="cantidad" />
        </form>
      </div>
    </>
  );
};

export default ShopPage;
