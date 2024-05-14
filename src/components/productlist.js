import React from 'react';
import { useInView } from 'react-intersection-observer'; // Importing useInView for animations on scroll
import Slider from 'react-slick'; // Importing Slider component from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList = ({ products }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the product is in view
    triggerOnce: true, // Trigger animation only once
  });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product, index) => (
        <div
          key={index}
          ref={ref}
          className={`border border-gray-300 rounded-lg overflow-hidden shadow-lg ${
            inView ? 'animate-fadeIn' : 'opacity-0'
          }`}
        >
          <Slider {...carouselSettings} className="w-full h-64 object-cover">
            {product.images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            ))}
          </Slider>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <div className="flex justify-between items-center mb-4">
              {product.discounted_price ? (
                <div>
                  <span className="text-gray-500 line-through font-medium">
                    ₹{product.original_price}
                  </span>{' '}
                  <span className="text-red-500 font-semibold">
                    ₹{product.discounted_price}
                  </span>
                </div>
              ) : (
                <span className="text-gray-500 font-medium">
                  ₹{product.original_price}
                </span>
              )}
              <span className="font-medium">
                Sizes: {product.available_sizes.join(', ')}
              </span>
            </div>
            {/* <p className="text-sm text-gray-700">{product.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
