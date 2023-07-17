import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGatosContext } from "../../context/GatosContext";
import CardUser from "../../components/CardUser/CardUser";
import DisableElevation from "../../components/Button/Button";

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
    </div>
  );
};

export default DetailPage;
