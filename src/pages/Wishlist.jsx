import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) return <p className="p-6">Your wishlist is empty.</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {wishlist.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/products/${item.id}`}>
            <img src={item.image} alt={item.title} />
          </Link>
          <h3>{item.title}</h3>
          <p>₹ {item.price}</p>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}