import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/productlist';
// import formalShoes from '../data/formalshoes';
// import bagpacks from '../data/bagpacks';
import products from '../data/product';
const CategoryPage = () => {
  const { slug } = useParams();

  const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{readableTitle}</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
