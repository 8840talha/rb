import React from 'react';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.discounted_price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white border rounded-lg shadow-sm p-4"
              >
                <img
                  src={item.images[0]?.src}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-md border"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1 capitalize">{item.category.replace(/_/g, ' ')}</p>
                  <p className="text-base font-bold text-black">₹{item.discounted_price}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <label className="text-sm text-gray-600">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                      className="w-16 border px-2 py-1 rounded text-sm"
                      min="1"
                    />
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="ml-auto text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium">₹{total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
