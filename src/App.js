import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/ProductCss.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
