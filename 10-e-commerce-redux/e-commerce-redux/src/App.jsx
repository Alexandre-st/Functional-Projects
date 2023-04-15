import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import FloatingCart from "./components/FloatingCart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductShowCase from "./components/ProductShowCase";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductShowCase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
