// GatosContext.js

import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const GatosContext = createContext();
const initialState = {
  gatos: [],
  shoppingCart: [],
  gatosFilter: [],
};
const GatosProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);
  console.log(items);
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
export const useGatosContext = () => useContext(GatosContext);
