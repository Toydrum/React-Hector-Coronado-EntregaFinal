import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GatosContext } from "../../context/GatosContext";

const DisableElevation = ({data}) => {
  const [items, setItems] = useContext(GatosContext);
  setItems(() => {

  })
  console.log(items);

  return (
    <Link to={"/shop"}>
      <Button variant="contained" disableElevation>
        Adoptar
      </Button>
    </Link>
  );
  DisableElevation.propTypes = {
    data: PropTypes.shape({
      img: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      donacion: PropTypes.number.isRequired,
    }).isRequired,
};

export default DisableElevation;
