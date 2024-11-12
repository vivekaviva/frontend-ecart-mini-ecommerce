import { Fragment, useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  return (
    <Fragment>
      <div className="container">
        <h1 id="products_heading mt-5">Latest Products</h1>
      </div>
    </Fragment>
  );
}
