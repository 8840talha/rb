import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">No order data found.</h1>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">
          Go back to home
        </Link>
      </div>
    );
  }

  const { name, phone, address, totalAmount } = state;

  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h1>
      <p className="text-gray-700 mb-2">Thank you <strong>{name}</strong>, your order has been received.</p>
      <p className="text-gray-700 mb-2">We'll contact you at <strong>{phone}</strong> shortly.</p>
      <p className="text-gray-700 mb-4">Total Amount: <strong>₹{totalAmount}</strong></p>
      <p className="text-gray-600 text-sm mb-6">Delivery Address:</p>
      <div className="text-sm bg-gray-100 p-4 rounded mb-6">
        {address}
      </div>
      <a
        href={`https://wa.me/918957044622?text=${encodeURIComponent(`Hi, I have placed an order. My name is ${name} and my number is ${phone}. Please confirm my order.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition"
      >
        Chat with Us on WhatsApp
      </a>
      <div className="mt-8">
        <Link to="/" className="text-blue-500 hover:underline text-sm">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
