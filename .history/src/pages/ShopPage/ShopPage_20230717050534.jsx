import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";
import { addDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const initialState = {
  color: "",
  donacion: "",
  cantidad: "",
};

const ShopPage = () => {
  const [gato, setGato] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const querySnapshot = await getDocs(q);
      const selectedGato = querySnapshot.docs.find((doc) => doc.id === id);

      if (selectedGato) {
        setGato({ ...selectedGato.data(), id: selectedGato.id });
      } else {
        setGato(null);
      }
    };
    getGatito();
  }, [id]);
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
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
