import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GatosContext } from "../../context/GatosContext";
import PropTypes from "prop-types";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const { id } = useParams();
  const [gato] = useContext(GatosContext);

  // Encuentra la card específica con el 'id' en el array 'gato'
  const selectedGato = gato.find((item) => item.id === id);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Renderiza la card específica solo si 'selectedGato' no es nulo */}
        {selectedGato && <CardUser data={selectedGato} />}
      </div>
    </div>
  );
};

DetailPage.propTypes = {
  gato: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      donacion: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DetailPage;
