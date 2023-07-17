// GatosContext.js

import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const GatosContext = createContext();

export const GatosProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const agregarGato = (gato) => {
    setItems((prevItems) => [...prevItems, gato]);
  };

  return (
    <GatosContext.Provider value={{ items, agregarGato }}>
      {children}
    </GatosContext.Provider>
  );
};

GatosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
