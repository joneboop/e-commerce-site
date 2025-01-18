import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ searchQuery, selectedCategory, featured }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on searchQuery
  let displayedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter products based on selectedCategory
  if (selectedCategory && selectedCategory !== 'All') {
    displayedProducts = displayedProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // If featured is true, limit the number of products
  if (featured) {
    displayedProducts = displayedProducts.slice(0, 4); // Display first 4 products
  }

  if (displayedProducts.length === 0) {
    return (
      <Typography variant="h6" color="text.secondary">
        No products found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {displayedProducts.map((product) => (
        <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
