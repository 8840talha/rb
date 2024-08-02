// Home.js
import React, { useState } from 'react';
import products from '../data/product';
import ProductList from '../components/productlist';
import Filter from '../components/filter';
import InstagramSection from '../components/instagram'
import Carousel from '../components/carousal';

const Home = () => {
  const [sizeFilter, setSizeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleSizeChange = (size) => {
    setSizeFilter(size);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleClearFilters = () => {
    setSizeFilter('');
    setCategoryFilter('');
  };

  // Filter products based on size and category
  const filteredProducts = products.filter((product) => {
    return (
      (sizeFilter === '' || product.available_sizes.includes(Number(sizeFilter))) &&
      (categoryFilter === '' || product.category === categoryFilter)
    );
  });

  const finalProducts = filteredProducts;

  return (
    <>
      <Carousel />
      <Filter
        sizeFilter={sizeFilter}
        categoryFilter={categoryFilter}
        onSizeChange={handleSizeChange}
        onCategoryChange={handleCategoryChange}
        onClearFilters={handleClearFilters}
      />
      <div className="flex justify-start">
        <div className="w-full p-4">
          <ProductList products={finalProducts} />
        </div>
      </div>
      <div>
        <InstagramSection />
      </div>
    </>
  );
};

export default Home;
