import { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import "./CardList.css";
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
  }, []);
  console.log(gato);

  return (
    <div className="Cards-List">
      {gato.map((gato) => {
        return (
          <div key={gato.id}>
            <Link to={`/detail/${gato.id}`} style={{ textDecoration: "none" }}>
              <CardUser data={gato} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
