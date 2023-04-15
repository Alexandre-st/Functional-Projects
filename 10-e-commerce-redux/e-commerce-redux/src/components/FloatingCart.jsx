import { Link } from "react-router-dom";
import "../css/FloatingCart.css";
import cartIcon from "../css/shopping-cart.svg";

const FloatingCart = () => {
  return (
    <Link to="shoppingCart">
      <div className="floating-cart">
        <div className="img-notif-container">
          <img src={cartIcon} alt="Panier" />
          <span className="notif">0</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingCart;
