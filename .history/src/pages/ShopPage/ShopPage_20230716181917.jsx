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

  const handleOnChange = (e) => {
    const { value, color } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="caja">
        <h1 className="titulo">ShopPage</h1>
        <form onSubmit={onSubmit}>
          <TextField
            name="color"
            className="campo"
            placeholder="color"
            value={values.color}
            onChange={handleOnChange}
          />
          <TextField
            name="donación"
            className="campo"
            placeholder="donación"
            value={values.donacion}
            onChange={handleOnChange}
          />
          <TextField
            name="cantidad"
            className="campo"
            placeholder="cantidad"
            value={values.cantidad}
            onChange={handleOnChange}
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default ShopPage;
