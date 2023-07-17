/* import { useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [gato, setGato] = useState({});

  let { id } = useParams();

  console.log(gato);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {gato.id ? <CardUser data={gato} /> : null}
      </div>
      <div
        style={{
          display: "block",
        }}
      >
        <p
          style={{
            display: "block",
            justifyContent: "center",
            marginInline: 280,
            fontSize: 20,
          }}
        >
       
        </p>
      </div>
    </div>
  );
};

export default DetailPage; */
