import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const GatosContext = createContext();

export const GatosProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <GatosContext.Provider value={[items, setItems]}>
      {children}
    </GatosContext.Provider>
  );
};

GatosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
