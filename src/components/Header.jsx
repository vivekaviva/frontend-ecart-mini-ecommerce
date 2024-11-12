import { Link } from "react-router-dom";

export default function Header({ cartItems }) {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const navLinks = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };
  return (
    <>
      <nav style={navbarStyle}>
        <h2>
          <Link to="/" style={{ ...linkStyle, fontSize: "24px" }}>
            ShopEasy
          </Link>
        </h2>
        <div style={navLinks}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/cart">
            <span id="cart" className="ml-3">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
