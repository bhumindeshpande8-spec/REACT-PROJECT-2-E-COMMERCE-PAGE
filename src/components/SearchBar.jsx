// src/components/SearchBar.jsx
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  // Debounce input for 300ms
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{
        width: "100%",
        padding: "8px 12px",
        marginBottom: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
}