// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 

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
        <div className="flex items-center">
          <div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
