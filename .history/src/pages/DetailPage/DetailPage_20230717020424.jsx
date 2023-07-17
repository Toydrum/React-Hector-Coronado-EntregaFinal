import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
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
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedGato && <CardUser data={selectedGato} />}
      </div>
    </div>
  );
};

export default DetailPage;
