import { useParams } from "react-router-dom";
import { useGatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";
import DisableElevation from "../../components/Button/Button";
import "./DetailPage.css";

const DetailPage = () => {
  const [gatoState, setGatoState] = useGatosContext();
  const { id } = useParams();
  const gato =
    gatoState.gatos && gatoState.gatos.length > 0
      ? gatoState.gatos.find((g) => {
          return g.id === id;
        })
      : undefined;
  return (
    <div>
      <h1>{gato && gato.color ? gato.color : "DetailPage"}</h1>
      {gato !== undefined ? (
        <div className="detail">
          <img src={gato.img} className="img" />
          <p>donación: {gato.donacion}</p>
          <p>
            $
            {gato.vacunas
              ? "tiene todas las vacunas"
              : "no tiene todas las vacunas"}
          </p>
        </div>
      ) : (
        ""
      )}
      <div style={{ display: "flex", justifyContent: "center" }}></div>
    </div>
  );
};

export default DetailPage;
