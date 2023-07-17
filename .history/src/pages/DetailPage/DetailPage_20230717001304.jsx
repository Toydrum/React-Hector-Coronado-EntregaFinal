import { useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  const [item, setItem] = useState();
  let { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {item && <CardUser data={item} />}
      </div>
    </div>
  );
};

export default DetailPage;
