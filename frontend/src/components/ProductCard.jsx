import React, { useContext } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../context/CurrencyContext'; // Import CurrencyContext

const ProductCard = ({ product }) => {
  const { currency, exchangeRates } = useContext(CurrencyContext);

  // Calculate price in selected currency
  const priceInSelectedCurrency = (
    product.price * exchangeRates[currency]
  ).toFixed(2);

  // Define currency symbols
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    MXN: 'Mex$',
  };

  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <CardMedia
          component="img"
          height="300"
          image={`http://localhost:5000${product.image}`}
          alt={product.name}
        />
      </Link>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          {currencySymbols[currency]}
          {priceInSelectedCurrency}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/product/${product._id}`}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
