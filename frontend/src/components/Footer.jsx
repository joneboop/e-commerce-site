import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{ backgroundColor: 'primary.main', color: '#fff', p: 2, mt: 'auto' }}
  >
    <Typography variant="body2" align="center">
      &copy; {new Date().getFullYear()} Mahina
    </Typography>
  </Box>
);

export default Footer;
