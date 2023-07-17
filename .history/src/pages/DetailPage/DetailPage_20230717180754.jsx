import { useParams } from "react-router-dom";
import { useGatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";
import DisableElevation from "../../components/Button/Button";

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
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        {gato && gato.color ? gato.color : "DetailPage"}
      </h1>
      (if(gato !== undefined && gato.img && gato.donacion && gato.vacunas)
      {
        <div>
          <img src={gato.img} />
          <p>{gato.donacion}</p>
          <p>{`vacunas: ${gato.vacunas}`}</p>
        </div>
      }
      )<div style={{ display: "flex", justifyContent: "center" }}></div>
    </div>
  );
};

export default DetailPage;
