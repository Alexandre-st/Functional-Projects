import { Link } from "react-router-dom";
import "../css/Products.css";
import heart from "../css/heart.svg";
import inventory from "../data/inventory";

const Products = () => {
  return (
    <div className="container-products">
      {inventory.map((item) => (
        <Link
          to={{
            pathname: `/products/${item.title.replace(/\s+/g, "").trim()}`,
          }}
          key={item.id}
        >
          <div className="bloc-card">
            <div className="product-card">
              <div className="visual-aspect">
                <img className="img-product" src={item.img} alt={item.title} />
                <div className="like-container">
                  <img src={heart} alt="" />
                </div>
              </div>
              <div className="info">
                <p>{item.title}</p>
                <p>Prix: {item.price} €</p>
              </div>
              <div className="back-card"></div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
