import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LeafletControlGeocoder from '../components/LeafletControlGeocoder';
import Locations from '../lib/locations';
import MagicSuggestions from '../components/MagicSuggestions';
import TryBanner from '../components/TryBanner';
import EmojiPicker from '../components/EmojiPicker';
import LocationCard from '../components/LocationCard';

const Map = () => {
  const SydneyPosition = [-33.8657, 151.2159];
  const [showLocationCard, setShowLocationCard] = useState(false);

  const createCustomIcon = (iconUrl) => {
    return new L.Icon({
      iconUrl,
      iconSize: [50, 50],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  };

  return (
    <>
      <h1>THIS IS WORKING</h1>
      <MagicSuggestions />
      <TryBanner />
      <LocationCard />
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
                <div className='dropdown dropdown-top'>
                  <div tabIndex='0' role='button' className='btn m-1'>
                    Pick Emoji
                  </div>
                  <div
                    tabindex='0'
                    className='card compact dropdown-content z-[1]'
                  >
                    <EmojiPicker />
                  </div>
                </div>
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
