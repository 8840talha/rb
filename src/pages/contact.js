import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

      <p className="text-lg text-gray-700 text-center mb-8">
        We'd love to hear from you! Whether you have a question about your order, products, or anything else — we're here to help.
      </p>

      <div className="bg-white border rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Chat with us on WhatsApp</h2>
        <p className="text-gray-700 mb-4">
          For instant support, tap the button below to message us directly.
        </p>

        <a
          href="https://wa.me/918957044622"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 transition text-white font-medium px-6 py-3 rounded-lg"
        >
          📲 Message on WhatsApp
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Available: Monday - Saturday, 10:00 AM to 7:00 PM
        </p>
      </div>
    </div>
  );
};

export default Contact;
