import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { CurrencyContext } from '../context/CurrencyContext';

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '300px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // Vertical padding + font size from SearchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
  },
}));

const Navbar = ({ searchQuery, setSearchQuery }) => {
  // Access currency context
  const { currency, setCurrency } = useContext(CurrencyContext);

  // Handle currency change
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  // Handle input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality here
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        {/* Logo */}
        <Link to="/">
          <Logo src="/logomahina.png" alt="Mahina Logo" />
        </Link>

        {/* Navigation links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Search bar */}
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Search>
        </Box>

        {/* Currency Selector */}
        <FormControl variant="standard" sx={{ minWidth: 80, marginLeft: 2 }}>
          <InputLabel id="currency-label">Currency</InputLabel>
          <Select
            labelId="currency-label"
            value={currency}
            onChange={handleCurrencyChange}
            label="Currency"
          >
            <MenuItem value="MXN">MXN (Mex$)</MenuItem>
            <MenuItem value="USD">USD ($)</MenuItem>
            <MenuItem value="EUR">EUR (€)</MenuItem>
          </Select>
        </FormControl>

        {/* Cart Button */}
        <Button
          color="inherit"
          component={Link}
          to="/cart"
          startIcon={<ShoppingCartIcon />}
          sx={{ marginLeft: 2 }}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
