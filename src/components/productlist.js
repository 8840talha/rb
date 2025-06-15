import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './productlist.css';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

  const handleAddToCart = (product) => {
    const phoneNumber = '918957044622';
    const message = `Hi, I'm interested in this product:\n\n*${product.title}*\nCategory: ${product.category}\nPrice: ₹${product.discounted_price}\n\n${product.images[0]?.src}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Pagination Logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-visible shadow-md hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <Slider {...carouselSettings}>
              {product.images.map((image, index) => (
                <div key={index} className="relative aspect-w-1 aspect-h-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Slider>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-700">
                <p className="hover:text-blue-500 transition-colors duration-300">
                  {product.title}
                </p>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">
                  ₹{product.discounted_price}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white text-sm px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
