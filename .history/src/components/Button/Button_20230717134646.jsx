import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import "./Button.css";

const DisableElevation = () => {
  const handleClick = () => {};

  return (
    <Button
      className="adopt"
      variant="contained"
      disableElevation
      onClick={handleClick}
    >
      Adoptar
    </Button>
  );
};

export default DisableElevation;
