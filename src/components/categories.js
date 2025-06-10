// components/Categories.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({categoriesData}) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {categoriesData.map((cat, index) => (
        <div
          key={index}
          onClick={() => navigate(`/category/${cat.category.toLowerCase().replace(/\s+/g, '-')}`)}
          className="bg-white rounded-xl  cursor-pointer flex flex-col items-center p-4"
        >
          <img
            src={cat.image.src}
            alt={cat.image.alt}
            className="h-40 w-full object-cover rounded-lg mb-3"
          />
          <p className="text-center font-semibold text-gray-800">{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
