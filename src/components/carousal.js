import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/RussellenBrown_1920x1080_Final.png';
import Image2 from '../assets/mainbanner1.png';
// import Image3 from '../assets/mainbanner2.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
<Slider {...settings}>
  {[Image1, Image2].map((img, index) => (
    <div key={index} className="w-full h-screen relative overflow-hidden">
      {/* Blurred Background */}
      <img
        src={img}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover blur-lg scale-110"
        aria-hidden="true"
      />
      {/* Foreground Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-contain z-10"
        />
      </div>
    </div>
  ))}
</Slider>

    </div>
  );
};

export default Carousel;
