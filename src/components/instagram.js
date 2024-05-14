import React from 'react';
import Image1 from '../assets/1636.jpg';
import Image2 from '../assets/1711955372Clarks-April-eComm-banner---Internal_1440-x-480_web.avif';
import Image3 from '../assets/Leather_shoes_1.webp';
import Image4 from '../assets/download.jpg';

const InstagramSection = () => {
  const images = [
    { id: 1, src: Image1, alt: "Image 1" },
    { id: 2, src: Image2, alt: "Image 2" },
    { id: 3, src: Image3, alt: "Image 3" },
    { id: 4, src: Image4, alt: "Image 4" },
  ];

  const handleImageClick = () => {
    window.location.href = 'https://www.instagram.com/shoelebrity_branded_shoes/?hl=en';
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Follow us on Instagram</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <a
              key={image.id}
              href="https://www.instagram.com/shoelebrity_branded_shoes/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleImageClick()}
              className="flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-48 object-cover cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;
