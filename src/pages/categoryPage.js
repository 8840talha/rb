// pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import products from '../data/product';
import ProductList from '../components/productlist';
// import Image7 from '../assets/adamTan.jpg'
// import Image9 from '../assets/Adam.jpeg'
// import Image10 from '../assets/adamTan1.jpg'
// import Image8 from '../assets/adamTan1.jpg'
import bagpacks from '../data/bagpacks';
const CategoryPage = () => {
  const { slug } = useParams();

  const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

//   const filteredProducts = products.filter(product =>
//     product.category.toLowerCase().replace(/\s+/g, '-') === slug
//   );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{readableTitle}</h1>
      <ProductList products={bagpacks} />
    </div>
  );
};

export default CategoryPage;
