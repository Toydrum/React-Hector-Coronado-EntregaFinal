import { useState } from "react";
import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () => {
  let { id } = useParams();

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>DetailPage</h1>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
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
        ></p>
      </div>
    </div>
  );
};

export default DetailPage;
