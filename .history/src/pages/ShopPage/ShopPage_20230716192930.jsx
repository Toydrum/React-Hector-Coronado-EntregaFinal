import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
const initialState = {
  color: "",
  donacion: "",
  cantidad: "",
};

const ShopPage = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(initialState);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]:
        (name === "cantidad" || name === "donacion") && value !== ""
          ? parseInt(value)
          : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    //console.log("Document written with ID: ", docRef.id);
    setPurchaseID();
    setValues(initialState);
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
            name="donacion"
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
        </form>
        <button type="button" onClick={onSubmit}>
          Enviar
        </button>
      </div>
    </>
  );
};

export default ShopPage;
