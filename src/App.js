import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import CategoryPage from './pages/categoryPage';

const App = () => {

  return (
      <div>
        <Header   />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
