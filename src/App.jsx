import './App.css';
import Hero from './components/Hero';
import Map from './components/Map';
import React, { useState } from 'react'; // Import useState

function App() {
  const [mapData, setMapData] = useState(null); // Define mapData state

  const handleSearch = (data) => {
    setMapData(data);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <Map mapData={mapData} /> {/* Pass the mapData as a prop */}
    </>
  );
}

export default App;