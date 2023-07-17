import { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes
import "./CardList.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = ({ gato }) => {
  // No necesitas useState para 'gato' ya que viene como prop

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
  }, []);

  console.log(gato);

  return (
    <div className="Cards-List">
      {gato.map((gato) => (
        <div key={gato.id}>
          <Link to={`/detail/${gato.id}`}>
            <CardUser data={gato} />
          </Link>
        </div>
      ))}
    </div>
  );
};

CardList.propTypes = {
  gato: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      donacion: PropTypes.number.isRequired,
      // Añade otras propiedades aquí si es necesario
    })
  ).isRequired,
};

export default CardList;
