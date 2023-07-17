import { useParams } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = ({ gato }) => {
  const { id } = useParams();

  const selectedGato = gato.find((item) => item.id === id);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>
        DetailPage
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedGato && <CardUser data={selectedGato} />}
      </div>
    </div>
  );
};

export default DetailPage;
