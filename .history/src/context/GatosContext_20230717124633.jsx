import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const GatosContext = createContext();

export const GatosProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const agregarGato = (nuevoGato) => {
    setItems([...items, nuevoGato]);
  };
  console.log(items);
  return (
    <GatosContext.Provider value={[items, setItems, agregarGato]}>
      {children}
    </GatosContext.Provider>
  );
};

GatosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
