import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";
import { addDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import CardUser from "../../components/CardUser/CardUser";

const ShopPage = () => {
  const [gato, setGato] = useState(null);
  const { id } = useParams();

  const initialState = {
    nombre: "",
    apellido: "",
    Ciudad: "",
    Gato: {},
  };
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  console.log("Document written with ID: ", purchaseID);
  return (
    <>
      <div className="caja">
        <h1 className="titulo">ShopPage</h1>
        <form onSubmit={onSubmit}>
          <TextField
            name="nombre"
            className="campo"
            placeholder="nombre"
            value={values.nombre}
            onChange={handleOnChange}
          />
          <TextField
            name="apellido"
            className="campo"
            placeholder="apellido"
            value={values.apellido}
            onChange={handleOnChange}
          />
          <TextField
            name="ciudad"
            className="campo"
            placeholder="ciudad"
            value={values.ciudad}
            onChange={handleOnChange}
          />
          <button type="submit" onClick={onSubmit}>
            Enviar
          </button>
        </form>
        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </>
  );
};

export default ShopPage;
