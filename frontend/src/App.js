import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <CssBaseline />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          paddingBottom: '2rem',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route
            path="/products"
            element={<AllProductsPage searchQuery={searchQuery} />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
