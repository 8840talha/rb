import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">Russellen Brown</Link>

       <nav className="hidden md:flex items-center gap-6 text-sm">
  <Link to="/" className="hover:text-gray-300 transition">Home</Link>
  <Link to="/categories" className="hover:text-gray-300 transition">Categories</Link>
  <Link to="/about" className="hover:text-gray-300 transition">About</Link>
  <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link> {/* ✅ NEW */}
</nav>


        <Link to="/cart" className="relative text-xl">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
