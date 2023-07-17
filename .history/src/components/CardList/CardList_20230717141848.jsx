// CardList.js

import { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import { GatosContext } from "../../context/GatosContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = () => {
  const { gatos, setGatos } = useContext(GatosContext);

  useEffect(() => {
    const getGatitos = async () => {
      const q = query(collection(db, "gatitos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setGatos(docs); // Establecer los datos de los gatos en el contexto
    };
    getGatitos();
  }, [setGatos]);

  return (
    <div className="Cards-List">
      {gatos.map((gato) => (
        <div key={gato.id}>
          <Link to={`/detail/${gato.id}`}>
            <CardUser data={gato} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardList;
