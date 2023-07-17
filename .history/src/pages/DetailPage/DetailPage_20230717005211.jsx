import React from "react";
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes

const DetailPage = ({ gato }) => {
  const { id } = useParams();

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
      // Añade otras propiedades aquí si es necesario
    })
  ).isRequired,
};

export default DetailPage;
