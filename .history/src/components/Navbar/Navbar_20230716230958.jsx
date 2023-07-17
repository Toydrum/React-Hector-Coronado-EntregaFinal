import { useContext } from "react";
import "./Navbar.css";
import logo from "./cat-logo.svg";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import MenuColor from "../MenuColor/MenuColor";
import { GatosContext } from "../../context/GatosContext";
//import { GatosProvider } from "../../context/GatosContext";

const NavBar = () => {
  const [items] = useContext(GatosContext);
  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <img src={logo} alt="gatito" style={{ height: 50, width: 50 }} />
        <li className="li">
          <Link to="/" className="li">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/about" className="li">
            About
          </Link>
        </li>
        <li className="li">
          <Link to="/contact" className="li">
            Contact
          </Link>
        </li>
        <li className="li">
          <MenuColor />
        </li>
        <li className="li">
          <Link to="/shop" className="li">
            <CartWidget className="li" />
          </Link>
        </li>
        <li>{items.length}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
