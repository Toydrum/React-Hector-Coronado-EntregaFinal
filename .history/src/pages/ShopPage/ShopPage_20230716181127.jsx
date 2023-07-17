import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";

const initialState = {
  color: "",
  donacion: 0,
  cantidad: 0,
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);

  return (
    <>
      <div className="caja">
        <h1 className="titulo">ShopPage</h1>
        <form>
          <TextField
            name="color"
            className="campo"
            placeholder="color"
            value={values.color}
          />
          <TextField
            name="donación"
            className="campo"
            placeholder="donación"
            value={values.donacion}
          />
          <TextField
            name="cantidad"
            className="campo"
            placeholder="cantidad"
            value={values.cantidad}
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ShopPage;
