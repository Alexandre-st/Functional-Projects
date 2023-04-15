import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductShowcase.css";
import inventory from "../data/inventory";

const ProductShowCase = () => {
  const [nbMugs, setNbMugs] = useState(0);
  const {id} = useParams();
  const ref = useRef();

  const updateMugs = (evt) => {
    setNbMugs(Number(evt.target.value));
  }

  // console.log(id)
  const productClicked = inventory.findIndex((obj) =>
  obj.title.replace(/\s+/g, "").trim() === id);

  console.log(productClicked);

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          className="img-showcase"
          src={inventory[productClicked].img}
          alt={inventory[productClicked].title}
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix: {inventory[productClicked].price} €</p>
      </div>

      <form>
        <label htmlFor="quantity">Quantité</label>
        <input type="number" id="quantity" name="quantity" value={nbMugs} onChange={updateMugs} />
        <button>Ajouter au panier</button>
        <span className="adding-infos"></span>
      </form>
    </div>
  );
};

export default ProductShowCase;
