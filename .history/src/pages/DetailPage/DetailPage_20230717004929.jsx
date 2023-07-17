import React from "react";
import CardUser from "../../components/CardUser/CardUser";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes

const DetailPage = ({ gato }) => {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Renderiza solo la card específica del 'id' */}
        {gato
          .filter((item) => item.id === id)
          .map((item) => (
            <CardUser key={item.id} data={item} />
          ))}
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
