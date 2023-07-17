//import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";
//import { GatosContext } from "../../context/GatosContext";

const DetailPage = () => {
  const [item, setItem] = useState();
  //let { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <div
        style={{
          display: "block",
        }}
      ></div>
    </div>
  );
};

export default DetailPage;
