import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const blanco = "blanco";
  const rayado = "rayado";
  const negro = "negro";
  const gris = "gris";
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="color"
          onChange={handleChange}
        >
          <MenuItem value={blanco}>blanco</MenuItem>
          <MenuItem value={rayado}>rayado</MenuItem>
          <MenuItem value={negro}>negro</MenuItem>
          <MenuItem value={gris}>gris</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
