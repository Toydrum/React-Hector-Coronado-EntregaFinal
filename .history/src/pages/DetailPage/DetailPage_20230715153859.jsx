import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  console.log(prod);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {prod.id ? <CardUser data={prod} /> : null}
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
          {prod.description}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
