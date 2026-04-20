import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
  if (!products.length) {
    return <p style={{ color: "white" }}>Loading products...</p>;
  }

  return (
    <div className="products-container">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <img src={p.image} alt={p.title} />

          <h3>{p.title.slice(0, 40)}...</h3>
          <p>₹ {p.price}</p>

          <Link to={`/products/${p.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}