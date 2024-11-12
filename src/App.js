import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/ProductCss.css";
import Home from "./pages/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
