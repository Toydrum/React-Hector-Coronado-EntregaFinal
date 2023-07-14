import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = () => {
  const [prod, setProd] = useState([]);
  console.log(prod);
  useEffect(() => {
    getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const querySnapshot = await getDocs(q);
    };
  }, []);
  console.log(prod);

  return (
    <div className="Cards-List">
      {prod.map((prod) => {
        return (
          <Link key={prod.id} to={`detail/${prod.id}`}>
            <div>
              <CardUser data={prod} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardList;
