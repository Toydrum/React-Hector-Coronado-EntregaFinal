import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(event);
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
          <MenuItem value={10}>blanco</MenuItem>
          <MenuItem value={20}>rayado</MenuItem>
          <MenuItem value={30}>negro</MenuItem>
          <MenuItem value={30}>gris</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}