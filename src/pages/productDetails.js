import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product';
import { useCart } from '../context/cartContext';

const ProductDetails = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.title.replace(/\s+/g, '-') === slug);

  if (!product) return <div className="text-center py-20 text-lg">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="space-y-4">
        {product.images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="rounded-xl border" />
        ))}
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-4 capitalize">{product.category.replace(/_/g, ' ')}</p>
        <p className="text-2xl font-semibold text-black mb-2">₹{product.discounted_price}</p>
        <p className="line-through text-gray-500 mb-4">MRP: ₹{product.original_price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-700 mb-4">
          <strong>Available Sizes:</strong> {product.available_sizes.join(', ')}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
