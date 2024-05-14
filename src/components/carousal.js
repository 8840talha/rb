import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/1636.jpg';
import Image2 from '../assets/1711955372Clarks-April-eComm-banner---Internal_1440-x-480_web.avif';
import Image3 from '../assets/Leather_shoes_1.webp';

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
    <div className="max-w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-screen">
        <div className="h-screen">
          <img
            src={Image1}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen">
          <img
            src={Image2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-screen">
          <img
            src={Image3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
