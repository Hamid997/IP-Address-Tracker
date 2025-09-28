import React, { useState, useEffect } from 'react';
import arrow from '../assets/icon-arrow.svg';
import axios from 'axios';

export default function Hero({ onSearch }) { // Receive the callback function as a prop
  const [ipAddress, setIpAddress] = useState('');
  const [mapData, setMapData] = useState(null);

  const API_Key = "at_AiX3SZA8TadsEIA5zhRc9USBbSkka";

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_Key}&ipAddress=${ipAddress}`);
      const data = response.data; // Store the data first
      setMapData(data); // Update the state
      onSearch(data); // Call the callback function to send data to App.jsx
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [ipAddress]);

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="hero">
      <h1 className="heading">IP Address Tracker</h1>

      <form onSubmit={handleFormSubmit} autoComplete="off" className="form">
        <input
          type="text"
          name=""
          id=""
          className="input"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={handleInputChange}
        />
        <button type="submit" className="button">
          <img src={arrow} alt="" />
        </button>
      </form>

      {mapData && (
        <section className="infoBoard">
          <div className="infoView">
            <h2>Ip Address</h2>
            <p>{mapData.ip}</p>
          </div>
          <div className="infoView">
            <h2>Location</h2>
            <p>
              {mapData.location.city}, {mapData.location.region} {mapData.location.postalCode}
            </p>
          </div>
          <div className="infoView">
            <h2>Timezone</h2>
            <p>UTC {mapData.location.timezone}</p>
          </div>
          <div className="infoView">
            <h2>ISP</h2>
            <p>{mapData.isp}</p>
          </div>
        </section>
      )}
    </div>
  );
}




