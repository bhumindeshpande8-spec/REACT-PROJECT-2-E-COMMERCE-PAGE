import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page p-6">
      <h1 className="text-3xl mb-4">Welcome to E-Shop!</h1>
      <p className="mb-6">Explore premium products at the best prices.</p>
      <Link
        to="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Go to Products
      </Link>
    </div>
  );
}