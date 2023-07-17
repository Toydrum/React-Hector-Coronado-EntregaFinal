import { useState, useEffect } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import "./CardList.css";
//import { Link } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = ({ gato }) => {
  const [gatos, setGatos] = useState([]);
  useEffect(() => {
    const getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setGatos(docs);
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

export default CardList;
