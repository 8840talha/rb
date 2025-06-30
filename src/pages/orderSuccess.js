import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const { name, phone, address, totalAmount } = location.state || {};

  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Order Placed!</h2>
      <p className="mb-6">Thank you, <strong>{name}</strong>. Your order of ₹{totalAmount} has been received.</p>

      <div className="bg-gray-100 p-4 rounded text-left mb-6">
        <h3 className="font-semibold mb-2">Delivery Details</h3>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
