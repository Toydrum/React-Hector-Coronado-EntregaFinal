import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
//import { Link } from "react-router-dom";
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = () => {
  const [gato, setGato] = useState([]);
  useEffect(() => {
    getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    };
  }, []);
  console.log(gato);

  return <div className="Cards-List"></div>;
};

export default CardList;
