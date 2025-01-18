import React, { useState } from 'react';
import {
  Typography,
  Box,
  ButtonGroup,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ProductList from '../components/ProductList';

const AllProductsPage = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Valentines', 'Halloween', 'Christmas'];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" color="text.primary" gutterBottom>
        All Products
      </Typography>

      {/* Option 1: Button Group for Category Selection */}
      <ButtonGroup variant="outlined" sx={{ marginBottom: 2 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      {/* Option 2: Dropdown Menu for Category Selection */}
      {/* Uncomment if you prefer using a dropdown instead of buttons */}
      {/*
      <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      */}

      {/* Product List */}
      <ProductList
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
    </Box>
  );
};

export default AllProductsPage;
