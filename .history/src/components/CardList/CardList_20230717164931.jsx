import { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import "./CardList.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
//import { GatosContext } from "../../context/GatosContext";

const CardList = () => {
  const [gatoState, setGatoState] = useState([]);
  useEffect(() => {
    const getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setGatoState({ gatos: docs, shoppingCart: gatoState.shoppingCart || [] });
    };
    getGatito();
  }, []);

  const añadirGatito = (gato) => {
    console.log(gato);
    console.log(gatoState.shoppingCart);
    if (
      !gatoState.shoppingCart.find((g) => {
        return g.id === gato.id;
      })
    ) {
      gatoState.shoppingCart.push(gato);
      console.log(gatoState.shoppingCart);
    }
  };
  return (
    <div className="Cards-List">
      {gatoState.gatos && gatoState.gatos.length > 0 ? (
        gatoState.gatos.map((gato) => {
          return (
            <div key={gato.id}>
              <CardUser data={gato} handleData={añadirGatito} />
            </div>
          );
        })
      ) : (
        <p>No hay gatos</p>
      )}
    </div>
  );
};

export default CardList;
