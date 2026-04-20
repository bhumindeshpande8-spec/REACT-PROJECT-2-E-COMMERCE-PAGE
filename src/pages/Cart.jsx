import { useContext } from "react";
import { Link } from "react-router-dom"; // <-- use Link instead of useNavigate
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) return <p className="p-6">Your cart is empty.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-4 mb-3 items-center">
          <p className="flex-1">{item.title}</p>
          <input
            type="number"
            value={item.quantity}
            min={1}
            onChange={(e) => updateQty(item.id, +e.target.value)}
            className="w-16 border rounded px-2 py-1"
          />
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-4">Total: ₹ {total.toFixed(2)}</h3>

      {/* Use Link for redirect */}
      <Link
        to="/checkout"
        className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}