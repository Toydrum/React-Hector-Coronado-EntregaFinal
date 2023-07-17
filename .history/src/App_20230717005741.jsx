//import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { GatosProvider } from "./context/GatosContext";

//Components
import NavBar from "./components/Navbar/Navbar";
//import MenuColor from "./components/MenuColor/MenuColor";
//import CardUser from "./components/CardUser/CardUser";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ShopPage from "./pages/ShopPage/ShopPage";
// Importa PropTypes
import PropTypes from "prop-types";

// ...

const App = () => {
  // Define el estado 'gato' en App.js o en un componente superior y asegúrate de que esté actualizado con los datos de Firebase
  const [gato, setGato] = useState([]);

  // ...

  return (
    <Router>
      <GatosProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/About" element={<AboutPage />}></Route>
            <Route path="/Contact" element={<ContactPage />}></Route>
            {/* Pasa el array 'gato' como prop al componente DetailPage */}
            <Route path="/detail/:id" element={<DetailPage gato={gato} />} />
            <Route path="/shop" element={<ShopPage />}></Route>
          </Routes>
          <div className="Cards-Container"></div>
        </div>
      </GatosProvider>
    </Router>
  );
};

// ...

export default App;
