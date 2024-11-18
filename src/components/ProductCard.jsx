import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded-lg">
          <img
            className="card-img-top mx-auto"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">
              <Link to={"/product/" + product.id}>{product.title}</Link>
            </h5>
            <p className="brandColor">{product.brand}</p>
            <p className="productPrice">Price: ${product.price}</p>
            <p className="rating">Rating: {product.rating}/5</p>
            <p className="availability">
              Availability: {product.availabilityStatus}
            </p>
            <p>Discount : {product.discountPercentage}</p>
            <Link
              to={"/product/" + product.id}
              id="view_btn"
              className="btn btn-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
