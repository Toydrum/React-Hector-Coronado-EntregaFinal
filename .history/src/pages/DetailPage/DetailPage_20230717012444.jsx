import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const { id } = useParams();
  const [gato] = useContext(GatosContext);

  // Convertir el 'id' obtenido de useParams a cadena
  const selectedId = id.toString();

  // Encuentra el gato específico con el 'id' en el array 'gato'
  const selectedGato = gato.find((item) => item.id === selectedId);
  console.log(selectedGato);

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