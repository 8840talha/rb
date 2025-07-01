import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.discounted_price * item.quantity,
    0
  );

  const upiId = 'talhaparvez285@ybl';
  const upiUrl = `upi://pay?pa=${upiId}&pn=${formData.name}&am=${totalAmount}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiUrl)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all details');
      return;
    }
    setShowPaymentOptions(true);
  };

  const handlePaid = () => {
    const sellerMessage = `*New Order Received!*
\n\nShipping Details: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Amount: ₹${totalAmount}`;
    const customerMessage = `Hello ${formData.name}, your order of ₹${totalAmount} has been placed successfully. We'll contact you soon.\n\nThank you for shopping with us!`;

    window.open(`https://wa.me/918957044622?text=${encodeURIComponent(sellerMessage)}`, '_blank');
    window.open(`https://wa.me/91${formData.phone}?text=${encodeURIComponent(customerMessage)}`, '_blank');

    clearCart();
    navigate('/order-success', { state: { ...formData, totalAmount } });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Delivery Address"
          rows={4}
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="text-right">
          <p className="text-xl font-semibold text-gray-800">Total: ₹{totalAmount}</p>
        </div>

        {!showPaymentOptions ? (
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        ) : (
          <>
            <a
              href={upiUrl}
              className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition mb-6"
            >
              Pay via UPI App (PhonePe, GPay, etc.)
            </a>

            <div className="text-center mb-6">
              <p className="mb-3 text-gray-700 font-medium">Or scan the UPI QR code:</p>
              <img src={qrUrl} alt="UPI QR" className="mx-auto w-52 h-52 rounded border shadow-md" />
              <p className="text-sm mt-3 text-gray-500">UPI ID: {upiId}</p>
            </div>

            <button
              type="button"
              onClick={handlePaid}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              I Have Paid
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CheckoutPage;
