import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/Navbar/Navbar";
import CartWidged from "./components/CartWidget/CartWidget";
//import CardUser from "./components/CardUser/CardUser";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/cart" element={<CartWidged />}></Route>
        </Routes>
        <div className="Cards-Container"></div>
      </div>
    </Router>
  );
};

export default App;
