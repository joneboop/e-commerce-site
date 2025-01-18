// src/pages/ProductPage.jsx

import React, { useEffect, useState, useContext } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext'; // Import CurrencyContext

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { currency, exchangeRates } = useContext(CurrencyContext); // Access currency and exchangeRates
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product data
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value) || 1);
  };

  if (!product) {
    return (
      <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
        Loading...
      </Typography>
    );
  }

  // Calculate price in selected currency
  const priceInSelectedCurrency = (
    product.price * exchangeRates[currency]
  ).toFixed(2);

  // Define currency symbols
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    MXN: 'Mex$',
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
        <MuiLink component={Link} to="/" color="inherit">
          Home
        </MuiLink>
        <MuiLink component={Link} to="/products" color="inherit">
          Products
        </MuiLink>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Left Column: Product Image */}
        <Grid item xs={12} md={4.5}>
          <Box
            component="img"
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
            sx={{ width: '525px', height: '650px', borderRadius: 2 }}
          />
        </Grid>

        {/* Right Column: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>

          {/* Category */}
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Category: {product.category}
          </Typography>

          {/* Price */}
          <Typography variant="h6" color="primary" gutterBottom>
            {currencySymbols[currency]}
            {priceInSelectedCurrency}
          </Typography>

          {/* Description */}
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Typography variant="subtitle1" sx={{ marginRight: 2 }}>
              Quantity:
            </Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: 1 }}
              sx={{ width: 80 }}
            />
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            sx={{ marginTop: 2 }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
