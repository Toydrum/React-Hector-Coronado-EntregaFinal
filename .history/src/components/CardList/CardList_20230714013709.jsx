import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
//import { Link } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = () => {
  const [gato, setGato] = useState([]);
  useEffect(() => {
    const getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setGato(docs);
    };
    getGatito();
    console.log(gato);
  }, [gato]);

  return (
    <div className="Cards-List">
      {gato.map((gato) => {
        return (
          <div key={gato.id}>
            <CardUser data={gato} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
