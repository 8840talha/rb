import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {

  return (
      <div>
        <Header   />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home  />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
