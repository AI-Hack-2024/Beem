import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LeafletControlGeocoder from '../components/LeafletControlGeocoder';
import LocationCard from '../components/LocationCard';
import * as HoverCard from '@radix-ui/react-hover-card';
import Locations from '../lib/locations';
import MagicSuggestions from '../components/MagicSuggestions';
import TryBanner from '../components/TryBanner';

const Map = () => {
  const SydneyPosition = [-33.8657, 151.2159];

  const createCustomIcon = (iconUrl) => {
    return new L.Icon({
      iconUrl,
      iconSize: [50, 50],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  };

  console.log(Locations);

  return (
    <>
      <h1>THIS IS WORKING</h1>
      <MagicSuggestions />
      <TryBanner />
      <MapContainer
        center={SydneyPosition}
        zoom={15}
        scrollWheelZoom={false}
        style={{
          height: '700px',
        }}
        className='fixed inset-x-0 bottom-0'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        />
        {Locations.map((location) => (
          <Marker
            position={location.location}
            icon={createCustomIcon(location.icon)}
          >
            <Popup>
              <div>
                <h2>{location.name}</h2>
                <p>This is a custom popup with React and Leaflet!</p>
                <TryBanner />
              </div>
            </Popup>
          </Marker>
        ))}
        <LeafletControlGeocoder />
      </MapContainer>
    </>
  );
};

export default Map;
