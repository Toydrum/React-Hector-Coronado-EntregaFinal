import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const { id } = useParams();
  const [gato] = useContext(GatosContext);

  // Encuentra el gato específico con el 'id' en el array 'gato'
  const selectedGato = gato.find((item) => item.id === id);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Renderiza el gato específico solo si 'selectedGato' no es nulo */}
        {selectedGato && <CardUser data={selectedGato} />}
      </div>
    </div>
  );
};

export default DetailPage;
