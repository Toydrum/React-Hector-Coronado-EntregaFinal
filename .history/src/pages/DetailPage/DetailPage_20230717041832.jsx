import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [gato, setGato] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getGatito = async () => {
      const q = query(collection(db, "gatitos"));
      const querySnapshot = await getDocs(q);
      const selectedGato = querySnapshot.docs.find((doc) => doc.id === id);

      if (selectedGato) {
        setGato({ ...selectedGato.data(), id: selectedGato.id });
      } else {
        setGato(null);
      }
    };
    getGatito();
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {gato ? (
          <CardUser data={gato} />
        ) : (
          <p>No se encontró el gato seleccionado</p>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
