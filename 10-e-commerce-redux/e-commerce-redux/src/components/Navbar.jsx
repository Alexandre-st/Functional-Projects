import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-top">
      <Link to="/">Accueil</Link>
      <Link to="/products">Produits</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
