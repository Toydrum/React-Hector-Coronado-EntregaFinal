import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener los datos del item específico desde Firebase
    const fetchItemData = async () => {
      try {
        // Suponemos que 'id' contiene solo el valor del id sin los dos puntos ':'
        // Obtenemos el documento con el id específico desde Firebase
        const docRef = doc(db, "gatitos", id);
        const docSnap = await getDoc(docRef);

        // Verificamos si el documento existe
        if (docSnap.exists()) {
          // Si existe, seteamos los datos del item al estado 'item'
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
          // Si no existe, maneja la lógica para cuando el item no se encuentra
          // Por ejemplo, mostrar un mensaje de error o redirigir a otra página
          // En este caso, simplemente seteamos el estado 'item' como null
          setItem(null);
        }
      } catch (error) {
        console.error("Error al obtener los datos del item:", error);
        // Manejar errores en caso de que haya un problema al obtener los datos
        // Por ejemplo, mostrar un mensaje de error o redirigir a otra página
        // En este caso, simplemente seteamos el estado 'item' como null
        setItem(null);
      }
    };

    // Llamamos a la función para obtener los datos del item
    fetchItemData();
  }, [id]);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Mostrar 'CardUser' solo si hay datos en 'item' */}
        {item && <CardUser data={item} />}
      </div>
    </div>
  );
};

export default DetailPage;
