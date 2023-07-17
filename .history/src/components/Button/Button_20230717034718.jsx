import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DisableElevation = () => {
  return (
    <Link to={"/shop"}>
      <Button variant="contained" disableElevation>
        Adoptar
      </Button>
    </Link>
  );
};

export default DisableElevation;
