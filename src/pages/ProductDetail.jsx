import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  console.log("product id", id);
  return (
    <>
      <p>Product Detail Page</p>
    </>
  );
}
