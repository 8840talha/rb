import React from 'react';
import InstagramIcon from '../assets/in.png';
import YouTubeIcon from '../assets/yt.png';

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] pt-10 border-t text-gray-800">
      <div className="container mx-auto px-4">

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🚚</span>
            <p className="text-sm font-medium">Free Shipping</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">💳</span>
            <p className="text-sm font-medium">Secure Payments</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">🔁</span>
            <p className="text-sm font-medium">Easy Returns</p>
          </div>
          <a
            href="https://wa.me/918957044622"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-80 transition"
          >
            <span className="text-3xl mb-2">📞</span>
            <p className="text-sm font-medium">Prompt Support</p>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.instagram.com/russellenbrown" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
          <a href="https://www.youtube.com/@RUSSELLENBROWN" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" className="w-8 h-8 hover:opacity-80 transition" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mb-4">
          <p>© 2024, Russellen Brown. All Rights Reserved.</p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-10 text-center">
          <a href="/refund-policy" className="hover:text-black">Refund Policy</a>
          <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-black">Terms of Service</a>
          <a href="/shipping-policy" className="hover:text-black">Shipping Policy</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
