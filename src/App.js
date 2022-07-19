import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductsPage from "./Pages/ProductsPage";
import { CartContext } from "./context/CartContext";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState({
    items: [],
    totalItems: Number(1),
  });
  useEffect(() => {
    let cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={(cart, setCart)}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
