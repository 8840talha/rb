import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">Russellen Brown</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/categories" className="hover:text-gray-300 transition">Categories</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>

        {/* Cart & Menu Icon */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-xl">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-xl text-white z-40">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/categories" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>🛒 Cart ({cartCount})</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
