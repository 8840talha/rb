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
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.title} className="flex gap-4 border-b pb-4">
                <img
                  src={item.images[0]?.src}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-lg font-bold mt-2">₹{item.discounted_price}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label>Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.title, parseInt(e.target.value))
                      }
                      className="w-16 border px-2 py-1 rounded"
                      min="1"
                    />
                    <button
                      onClick={() => removeFromCart(item.title)}
                      className="text-red-500 hover:underline ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <p className="text-xl font-bold">Total: ₹{total}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
