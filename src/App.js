import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import CategoryPage from './pages/categoryPage';
import CartPage from './pages/cartPage';
import CheckoutPage from './pages/checkoutPage';
import OrderSuccess from './pages/orderSuccess';
import ProductDetails from './pages/productDetails';
import About from './pages/about';
import Contact from './pages/contact';

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
  <Route path="/product/:slug" element={<ProductDetails/>} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
