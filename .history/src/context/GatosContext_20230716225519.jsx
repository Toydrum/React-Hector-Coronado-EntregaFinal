import { useState, createContext } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const GatosContext = createContext();

const initialState = () => [{}];

const GatosProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  return (
    <GatosContext.Provider value={[items, setItems]}>
      {children}
    </GatosContext.Provider>
  );
};

GatosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GatosProvider;
