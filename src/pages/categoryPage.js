import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product';
import ProductList from '../components/productlist';

const CategoryPage = () => {
  const { slug } = useParams();
  const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">{readableTitle}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
