import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardUser = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 2, maxHeight: 250, padding: 5 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={data.img} alt="" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            style={{ fontSize: 35, fontFamily: "sitka text" }}
          >
            {data.color}
          </Typography>
          <Typography style={{ margin: 13, fontSize: 20 }}>
            ${data.donacion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
