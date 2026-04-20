import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
  <div className="details">
    <img src={product.image} alt={product.title} />

    <div className="details-info">
      <h2>{product.title}</h2>

      <p style={{ margin: "15px 0" }}>
        {product.description}
      </p>

      <h3 style={{ color: "#38bdf8", marginBottom: "10px" }}>
        $ {product.price}
      </h3>

      <p style={{ marginBottom: "15px" }}>
        <strong>Category:</strong> {product.category}
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 16px",
          borderRadius: "6px",
          border: "none",
          background: "#0ea5e9",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add to Cart
      </button>
    </div>
  </div>
);
}