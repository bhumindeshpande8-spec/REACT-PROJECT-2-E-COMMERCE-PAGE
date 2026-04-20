import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [hover, setHover] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">E-Shop</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>

        <div
          className="cart-badge-container"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Link to="/cart" className="cart-link">
            Cart ({totalItems})
          </Link>

          {hover && cart.length > 0 && (
            <div className="cart-dropdown">
              {cart.map((item) => (
                <div key={item.id} className="cart-dropdown-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-info">
                    <p>{item.title}</p>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>×</button>
                </div>
              ))}
              <Link to="/cart" className="view-cart-btn">
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}