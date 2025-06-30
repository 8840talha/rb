// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-white">Russellen Brown</h1>
        </div>
        <nav className="flex items-center">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/categories" className="mr-4">Categories</Link>
        </nav>
         <nav>
        <Link to="/cart" className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
        <div className="flex items-center">
          <div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
