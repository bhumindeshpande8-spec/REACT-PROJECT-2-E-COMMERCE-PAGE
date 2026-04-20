import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";


export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const inCart = cart.find((item) => item.id === product.id);
  const inWishlist = wishlist.find((item) => item.id === product.id);

  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className={`px-4 py-2 rounded ${
          inCart ? "bg-green-500" : "bg-blue-500"
        } text-white`}
      >
        {inCart ? `Added (${inCart.quantity})` : "Add to Cart"}
      </button>

      <button
        onClick={() => (inWishlist ? removeFromWishlist(product.id) : addToWishlist(product))}
        className={`px-4 py-2 rounded ml-2 ${
          inWishlist ? "bg-red-500" : "bg-gray-500"
        } text-white`}
      >
        {inWishlist ? "Remove Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}