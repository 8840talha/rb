import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import CategoryPage from './pages/categoryPage';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/checkoutPage';
import OrderSuccess from './pages/orderSuccess';

const App = () => {

  return (
      <div>
        <Header   />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
             <Route path="/cart" element={<CartPage />} /> {/* ✅ new route */}
             <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ */}
  <Route path="/order-success" element={<OrderSuccess />} /> {/* ✅ */}
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
