import React, { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import "./CardList.css";
import { Link } from "react-router-dom";

const CardList = () => {
  const [prod, setProd] = useState([]);
  console.log(prod);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProd(data));
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
