import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={product.images[0]?.src}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 truncate">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">{product.category.replace(/_/g, ' ')}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-black">₹{product.discounted_price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
              <Link
                to={`/product/${product.title.replace(/\s+/g, '-')}`}
                className="block text-center text-blue-500 text-sm mt-3 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
