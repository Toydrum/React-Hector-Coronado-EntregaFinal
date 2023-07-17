import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";
import DisableElevation from "../../components/Button/Button";

const DetailPage = () => {
  const { id } = useParams();
  const [gatos] = useGatosContext();

  const selectedGato = gatos.find((gato) => gato.id === id);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedGato ? (
          <CardUser data={selectedGato} />
        ) : (
          <p>No se encontró el gato seleccionado</p>
        )}
      </div>
      {selectedGato && <DisableElevation gato={selectedGato} />}
    </div>
  );
};

export default DetailPage;
