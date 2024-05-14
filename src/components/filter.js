import React from 'react';

const Filter = ({ sizeFilter, categoryFilter, onSizeChange, onCategoryChange, onClearFilters }) => {
  const sizes = [6,7,8,9,10,11,12]
  const Categories = ['Formal','Casual','Boots','Sneakers','Slippers']
    return (
    <div className="bg-gray-200 p-4 rounded-lg mt-4 sm:flex sm:flex-row sm:w-full sm:mx-auto">
      <div className='flex flex-wrap sm:flex-row  sm:items-center'>
        {/* Filter by Size */}
       {sizes.map(s=>{
  return <div className="mb-2 sm:mr-2">
  <button
    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-full mb-2 sm:mb-0`}
    onClick={() => onSizeChange(s)} // Example: Change '6' to the actual value
  >
    Size {s}
  </button>
</div>
       })}
      
       {Categories.map(c=>{
       return <div className="mb-2 sm:mr-2">
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-full mb-2 sm:mb-0`}
            onClick={() => onCategoryChange(c)} // Example: Change 'Formal' to the actual value
          >
           {c}
          </button>
        </div>
       })}
        
        {/* Clear All Filters */}
        <div className="mb-2 sm:mr-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-3 rounded-full mb-2 sm:mb-0"
            onClick={onClearFilters}
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
