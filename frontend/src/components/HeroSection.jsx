import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <Box
    sx={{
      backgroundImage: 'url(/path/to/hero-image.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      textAlign: 'center',
      padding: 2,
    }}
  >
    <Box>
      <Typography variant="h2" gutterBottom>
        Welcome to Mahina
      </Typography>
      <Typography variant="h5" gutterBottom>
        Discover our exclusive range of products.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/products"
        sx={{ marginTop: 2 }}
      >
        Shop Now
      </Button>
    </Box>
  </Box>
);

export default HeroSection;
