import React from 'react';
import products from '../data/product';
import categories from '../data/categories';
import ProductList from '../components/productlist';
import Carousel from '../components/carousal';
import Categories from '../components/categories';

const Home = () => {
  return (
    <>
      <Carousel />
      <h1 className="text-center text-4xl font-bold mt-12">Shop by Category</h1>
      <Categories categoriesData={categories} />

      <h1 className="text-center text-4xl font-bold mt-16 mb-4">All Products</h1>
      <div className="container mx-auto px-4">
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
