import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [showQR, setShowQR] = useState(false);

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
    setShowQR(true);
  };

  const handlePaid = () => {
    const message = `Hi, I have made a payment of ₹${totalAmount}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}`;
    const whatsappLink = `https://wa.me/918957044622?text=${encodeURIComponent(message)}`;

    clearCart();
    window.location.href = whatsappLink;
    navigate('/order-success', { state: { ...formData, totalAmount } });
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          required
        />
        <textarea
          placeholder="Delivery Address"
          rows={4}
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          required
        />

        <p className="text-xl font-semibold text-center">Total: ₹{totalAmount}</p>

        {!showQR ? (
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        ) : (
          <>
            {isMobile ? (
              <a
                href={upiUrl}
                className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition mb-4"
              >
                Pay Now via UPI App
              </a>
            ) : (
              <div className="text-center mb-4">
                <p className="mb-2 text-gray-700 font-medium">
                  Scan this QR to pay using any UPI app:
                </p>
                <img src={qrUrl} alt="UPI QR" className="mx-auto w-48 h-48" />
              </div>
            )}

            <button
              type="button"
              onClick={handlePaid}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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