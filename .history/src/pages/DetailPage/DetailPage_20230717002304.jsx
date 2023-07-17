import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const docRef = doc(db, "gatitos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error al obtener los datos del item:", error);
        setItem(null);
      }
    };

    fetchItemData();
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {item && <CardUser data={item} />}
      </div>
    </div>
  );
};

export default DetailPage;
