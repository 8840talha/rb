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
    // ✅ Message to seller
    const sellerMessage = `*New Order Placed*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nAmount: ₹${totalAmount}`;
    const sellerWhatsApp = `https://wa.me/918957044622?text=${encodeURIComponent(sellerMessage)}`;

    // ✅ Message to customer (optional)
    const customerMessage = `Thank you ${formData.name}, your order of ₹${totalAmount} has been placed. We'll contact you shortly.`;
    const customerWhatsApp = `https://wa.me/91${formData.phone}?text=${encodeURIComponent(customerMessage)}`;

    // ✅ Clear cart & redirect
    clearCart();
    window.open(sellerWhatsApp, '_blank'); // Open seller notification
    window.open(customerWhatsApp, '_blank'); // Optional: customer confirmation
    navigate('/order-success', { state: { ...formData, totalAmount } });
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Delivery Address"
          rows={4}
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <p className="text-lg font-semibold">Total: ₹{totalAmount}</p>

        {!showQR ? (
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Proceed to Payment
          </button>
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="mb-2 text-gray-700 font-medium">
                Scan this UPI QR with your mobile app:
              </p>
              <img src={qrUrl} alt="UPI QR" className="mx-auto w-48 h-48" />
              <p className="text-sm mt-2 text-gray-500">UPI ID: {upiId}</p>
            </div>

            <button
              type="button"
              onClick={handlePaid}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
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
