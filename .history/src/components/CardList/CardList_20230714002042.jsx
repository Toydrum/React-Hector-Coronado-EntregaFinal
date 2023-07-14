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
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    getGatito();
    console.log(gato);
  }, []);

  return <div className="Cards-List"></div>;
};

export default CardList;
