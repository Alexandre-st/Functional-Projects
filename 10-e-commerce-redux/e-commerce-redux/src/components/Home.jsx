import "../css/Home.css";
import imgShop from "../css/shopimg.jpg";

const Home = () => {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quis
        tempore necessitatibus soluta nam eos voluptatum totam earum possimus
        eligendi.
      </p>
      <img src={imgShop} alt="Img shop" />
    </div>
  );
};

export default Home;
