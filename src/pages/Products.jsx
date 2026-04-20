import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let filtered = [...products];

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Filter by search
  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sorting
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="page p-6">
      <div className="banner mb-4">
        <h1>Explore Premium Products</h1>
      </div>

      <SearchBar onSearch={setSearch} />
      <Filters setCategory={setCategory} setSort={setSort} />
      <ProductGrid products={filtered} />
    </div>
  );
}