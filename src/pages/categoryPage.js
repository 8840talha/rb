// pages/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product';
import ProductList from '../components/productlist';
import Image7 from '../assets/adamTan.jpg'
import Image9 from '../assets/Adam.jpeg'
import Image10 from '../assets/adamTan1.jpg'
import Image8 from '../assets/adamTan1.jpg'
const CategoryPage = () => {
  const { slug } = useParams();

  const readableTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().replace(/\s+/g, '-') === slug
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{readableTitle}</h1>
      <ProductList products={[{
      "title": "Russellen Brown Round Toe Derby Formal Shoes",
      "article_code": "RBS-04",
      "category": "Formal",
      "original_price": "1233",
      "discounted_price": "6500",
      "available_sizes": [5,6, 7, 8, 9, 10,11],
      "description": "Elegant formal shoes comes with pure crust leather encapsulated by a tpr sole and extreme cushion comfort",
        images: [
      { id: 7, src: Image7, alt: "Image 7" },
      { id: 8, src: Image8, alt: "Image 8" },
      { id: 9, src: Image9, alt: "Image 9" },
      { id: 10, src: Image10, alt: "Image 100" },
    ],
    },]} />
    </div>
  );
};

export default CategoryPage;
