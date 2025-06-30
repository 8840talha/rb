import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product';
import { useCart } from '../context/cartContext';

const ProductDetails = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.title.replace(/\s+/g, '-') === slug);

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="space-y-4">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || product.title}
            className="w-full rounded-lg border border-gray-200"
          />
        ))}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{product.category.replace(/_/g, ' ')}</p>

        <div className="text-2xl font-bold text-black mb-2">₹{product.discounted_price}</div>
        <div className="text-gray-500 line-through mb-4">MRP: ₹{product.original_price}</div>

        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

        <div className="mb-4">
          <span className="font-medium text-gray-700 mr-2">Available Sizes:</span>
          <span className="text-sm text-gray-600">{product.available_sizes.join(', ')}</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;