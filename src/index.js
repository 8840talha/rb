import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext'; // ✅ Import it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider> {/* ✅ Wrap the app */}
      <App />
    </CartProvider>
  </BrowserRouter>
);

reportWebVitals();
