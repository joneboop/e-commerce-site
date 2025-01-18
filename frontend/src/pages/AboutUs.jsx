import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      At Mahina, we are dedicated to providing the highest quality products to our customers...
    </Typography>
    {/* Add more content about your company */}
  </Box>
);

export default AboutUs;
