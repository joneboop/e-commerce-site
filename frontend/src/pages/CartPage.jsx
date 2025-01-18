import React, { useContext } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext'; 

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { currency, exchangeRates } = useContext(CurrencyContext);

  // Define currency symbols
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    MXN: 'Mex$',
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    console.log(item)
    return total + item.price * item.qty;
  }, 0);


  // Convert total price to selected currency
  const totalPriceInSelectedCurrency = (
    totalPrice * exchangeRates[currency]
  ).toFixed(2);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Box>
          {cartItems.map((item) => {
            const priceInSelectedCurrency = (
              item.price * exchangeRates[currency]
            ).toFixed(2);

            return (
              <Grid container spacing={2} key={item._id}>
                {/* Product details */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.qty}
                  </Typography>
                  <Typography variant="body2">
                    Price: {currencySymbols[currency]}
                    {priceInSelectedCurrency}
                  </Typography>
                </Grid>
                {/* Remove button */}
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            );
          })}

          {/* Total Price */}
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Total: {currencySymbols[currency]}
            {totalPriceInSelectedCurrency}
          </Typography>

          {/* Checkout Button */}
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            sx={{ marginTop: 2 }}
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
