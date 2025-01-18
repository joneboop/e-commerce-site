import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

const ContactUs = () => (
  <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
    <Typography variant="h4" gutterBottom>
      Contact Us
    </Typography>
    <Typography variant="body1" paragraph>
      We'd love to hear from you! Please fill out the form below and we'll get in touch with you shortly.
    </Typography>
    <form>
      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
        Submit
      </Button>
    </form>
  </Box>
);

export default ContactUs;
