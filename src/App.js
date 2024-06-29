import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=00169f5e92a24e4c8a654216242906&aqi=no&q=London');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Weather in London</h1>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Condition: {data.current.condition.text}</p>
    </div>
  );
}

export default WeatherComponent;