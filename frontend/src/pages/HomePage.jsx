import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';

const HomePage = ({ searchQuery }) => (
  <div>
    {/* Hero Section with Background Image */}
    <Box
      sx={{
        position: 'relative',
        // Adjust the height to cover the Hero Section
        minHeight: '60vh', // Adjust as needed
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional Overlay for Better Text Readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity as needed
        }}
      />

      {/* Content Positioned Above the Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Hero Section */}
        <HeroSection />
      </Box>
    </Box>

    {/* Featured Products Section */}
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <ProductList searchQuery={searchQuery} featured />
    </Box>
  </div>
);

export default HomePage;
