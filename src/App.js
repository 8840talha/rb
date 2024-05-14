import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import products from './data/product';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
      <div>
        <Header setFilteredProducts={setFilteredProducts} products={products} />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home searchedProducts={filteredProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
