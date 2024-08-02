import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productlist.css';

const ProductList = ({ products }) => {
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
    const message = `Hi, I'm interested in this product:\n\n*${product.title}*\nCategory: ${product.category}\nPrice: ₹${product.discounted_price}\n\n${product.images[0].src}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9990861828?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-visible shadow-md hover:shadow-lg transition-shadow duration-300">
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
                <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                  {product.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">₹{product.discounted_price}</p>
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
    </div>
  );
};

export default ProductList;
