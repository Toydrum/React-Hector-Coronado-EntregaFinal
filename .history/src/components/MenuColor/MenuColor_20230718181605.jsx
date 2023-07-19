import * as React from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useGatosContext } from "../../context/GatosContext";

const MenuColor = () => {
  const [anchorEl, setAnchorEl] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event);
  };

  const handleClose = (event) => {};
  console.log(anchorEl);

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Color
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Blanco</MenuItem>
        <MenuItem onClick={handleClose}>Rayado</MenuItem>
        <MenuItem onClick={handleClose}>Naranja</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuColor;
