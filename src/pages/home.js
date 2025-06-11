// Home.js
import React from 'react';
import products from '../data/product';
import categories from '../data/categories';
import ProductList from '../components/productlist';
// import Filter from '../components/filter';
// import InstagramSection from '../components/instagram'
import Carousel from '../components/carousal';
import Categories from '../components/categories';

const Home = () => {
  // const [sizeFilter, setSizeFilter] = useState('');
  // const [categoryFilter, setCategoryFilter] = useState('');

  // const handleSizeChange = (size) => {
  //   setSizeFilter(size);
  // };

  // const handleCategoryChange = (category) => {
  //   setCategoryFilter(category);
  // };

  // const handleClearFilters = () => {
  //   setSizeFilter('');
  //   setCategoryFilter('');
  // };

  // Filter products based on size and category
  // const filteredProducts = products.filter((product) => {
  //   return (
  //     (sizeFilter === '' || product.available_sizes.includes(Number(sizeFilter))) &&
  //     (categoryFilter === '' || product.category === categoryFilter)
  //   );
  // });

  const finalProducts = products;

  return (
    <>
      <Carousel />
      <h1 className='text-center mt-20 text-6xl font-semibold'>SHOP NOW</h1>
      <Categories categoriesData={categories}/>

      {/* <Filter
        sizeFilter={sizeFilter}
        categoryFilter={categoryFilter}
        onSizeChange={handleSizeChange}
        onCategoryChange={handleCategoryChange}
        onClearFilters={handleClearFilters}
      /> */}
      <h1 className='text-center mt-20 text-6xl font-semibold'>ALL PRODUCTS</h1>
      
      <div className="flex justify-start">
        <div className="w-full p-4">
          <ProductList products={finalProducts} />
        </div>
      </div>
      <div>
        {/* <InstagramSection /> */}
      </div>
    </>
  );
};

export default Home;
