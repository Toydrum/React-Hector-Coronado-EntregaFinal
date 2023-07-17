import PropTypes from "prop-types"; // Importa PropTypes
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DisableElevation from "../Button/Button";
import "./CardUser.css";

const CardUser = ({ data, handleData }) => {
  return (
    <>
      <Card
        className="card"
        sx={{
          justifyContent: "center",
          maxWidth: 250,
          margin: 2,
          maxHeight: 300,
          padding: 5,
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={data.img} alt="" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              style={{
                fontSize: 30,
                fontFamily: "sitka text",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {data.color}
            </Typography>
            <Typography
              style={{
                margin: 13,
                fontSize: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              ${data.donacion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <DisableElevation gato={data} handleClick={handleData} />
      </Card>
    </>
  );
};
CardUser.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    donacion: PropTypes.number.isRequired,
  }).isRequired,
  handleData: PropTypes.func({
    gato: PropTypes.shape({
      img: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      donacion: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardUser;
