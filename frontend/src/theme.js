import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6D4C41', // Primary accent color (e.g., a shade of brown)
    },
    secondary: {
      main: '#FFA726', // Secondary accent color (e.g., a shade of orange)
    },
    background: {
      default: '#F5F5F5', // Light gray background
      paper: '#FFFFFF', // White background for paper elements
    },
    text: {
      primary: '#333333', // Dark gray text for good contrast
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: `font-family: Verdana,Geneva,sans-serif;`, // Modern sans-serif font
    h1: {
      fontWeight: 700, // Bold headings
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Preserve case in button text
    },
  },
});

export default theme;
