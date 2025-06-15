import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categoriesData }) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {categoriesData.map((cat, index) => (
        <div
          key={index}
          onClick={() =>
            navigate(`/category/${cat.category.toLowerCase().replace(/\s+/g, '-')}`)
          }
          className="bg-white rounded-xl cursor-pointer flex flex-col items-center p-4 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center mb-3 border border-gray-200">
            <img
              src={cat.image.src}
              alt={cat.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center font-medium text-gray-800">{cat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
