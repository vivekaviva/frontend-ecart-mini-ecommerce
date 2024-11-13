import { Fragment, useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Environment Variables:", process.env);
    // const apiUrl = process.env.REACT_APP_API_URL || "Not Defined";
    const apiUrl = "http://localhost:8000";
    console.log("API URL:", apiUrl);

    const url = apiUrl + "/products";
    console.log("URL:", url);

    fetch(url)
      .then((res) => {
        if (!res) {
          throw new Error("Internal Server error");
        }
        return res.json();
      })
      .then((res) => {
        console.log("response from api", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);
  console.log("products", products);
  return (
    <Fragment>
      <div className="container">
        <h1 id="products_heading mt-5">Latest Products</h1>
      </div>
    </Fragment>
  );
}
