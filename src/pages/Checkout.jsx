// src/pages/Checkout.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax example
  const total = subtotal + tax;

  if (cart.length === 0) return <p className="p-6">Your cart is empty.</p>;

  return (
    <div className="checkout-page p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl mb-4">Checkout Summary</h2>
      <div className="cart-items mb-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.title} x {item.quantity}</span>
            <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="totals mb-4">
        <div className="flex justify-between mb-1">
          <span>Subtotal:</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Tax (10%):</span>
          <span>₹ {tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>
      </div>

      <button
        style={{
          padding: "10px 16px",
          borderRadius: "6px",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}