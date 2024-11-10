'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const GeolocationComponent = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=f67ec411c8f1d3');
        setCity(response.data.city);
      } catch (error) {
        console.error('Get city error: ', error);
      }
    };

    fetchCity();
  }, []);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=f67ec411c8f1d3');
        setCountry(response.data.country);
      } catch (error) {
        console.error('Get country error: ', error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <span>{country}, {city}</span>
  );
};

export default GeolocationComponent;
