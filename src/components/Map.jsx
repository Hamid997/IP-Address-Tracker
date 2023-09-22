import React, { useEffect, useRef } from 'react';
import Icon from '../assets/icon-location.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ mapData }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapData && mapData.location) {
      const icon = L.icon({
        iconUrl: Icon,
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconSize: [32, 40],
      });

      const { lat, lng } = mapData.location;

      if (mapRef.current) {
        // Check if the map is already initialized and destroy it
        mapRef.current.remove();
      }

      // Create a new map
      const map = L.map('map').setView([lat, lng], 13);
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by  <a  href="https://github.com/hamid997"  target="_blank"  rel="noopener noreferrer">Abdelhamid Birouk</a> ‍| &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([lat, lng], { icon: icon }).addTo(map);
    }
  }, [mapData]);

  return (
    <div id="map" className='Map'></div>
  );
}