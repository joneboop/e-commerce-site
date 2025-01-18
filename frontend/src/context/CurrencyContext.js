import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('MXN');
  const [exchangeRates, setExchangeRates] = useState({ MXN: 1 });

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/12eec74289c2b66ec091b1de/latest/MXN'
        );
        setExchangeRates(response.data.conversion_rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
