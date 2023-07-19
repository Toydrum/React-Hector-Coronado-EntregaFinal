import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Styles.css";
import { addDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import CardUser from "../../components/CardUser/CardUser";
import { useGatosContext } from "../../context/GatosContext";

const ShopPage = () => {
  const [gatoState, setGatoState] = useGatosContext();
  const { id } = useParams();

  const initialState = {
    nombre: "",
    apellido: "",
    ciudad: "",
    gatos: gatoState.shoppingCart || [],
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
    values.gatos = gatoState.shoppingCart;
    console.log(values);
    const docRef = await addDoc(collection(db, "compras"), {
      values,
    });
    setPurchaseID(docRef.id);
    //TODO: subir values a la base de datos
    setValues(initialState);
  };
  const eliminarGatito = (gato) => {
    console.log(gato);
    console.log(gatoState.shoppingCart);
    gatoState.shoppingCart = gatoState.shoppingCart.filter((g) => {
      return g.id !== gato.id;
    });
    console.log(gatoState.shoppingCart);
    setGatoState({
      gatos: gatoState.gatos || [],
      shoppingCart: gatoState.shoppingCart || [],
    });
  };
  const precios = gatoState.shoppingCart.map((gato) => gato.donacion);
  const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);
  console.log(total);

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
        <h1 className="total">{total}</h1>
        <div className="Cards-List">
          {gatoState.shoppingCart && gatoState.shoppingCart.length > 0 ? (
            gatoState.shoppingCart.map((gato) => {
              return (
                <div key={gato.id}>
                  <CardUser
                    data={gato}
                    handleData={eliminarGatito}
                    accion={"eliminar"}
                  />
                </div>
              );
            })
          ) : (
            <p>No hay gatos</p>
          )}
        </div>
        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </>
  );
};

export default ShopPage;
