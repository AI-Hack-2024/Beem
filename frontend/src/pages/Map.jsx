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

  useEffect(() => {
    const handleDoubleClick = () => {
      setShowLocationCard(!showLocationCard);
    };
    window.addEventListener('dblclick', handleDoubleClick);
    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, [showLocationCard]);

  return (
    <div className="flex flex-col p-4 align-center justify-center">
      <MagicSuggestions />
      <TryBanner />
      <div className='dropdown dropdown-btm z-50'>
        <div tabIndex='0' role='button' className='btn m-1'>
          Pick Emoji
        </div>
        <div tabindex='0' className='card compact dropdown-content z-[1]'>
          <EmojiPicker />
        </div>
      </div>
      {showLocationCard && (
        <LocationCard
          imageUrl1='https://www.bestrestaurants.com.au/media/qdwhbgh4/3.jpg?width=1200&quality=80&v=1d80cd939fcb950'
          imageUrl2='https://cdn.broadsheet.com.au/cache/4e/8a/4e8a2a0c7d1e0f109b1d60c42558ec04.jpg'
          name='Opera Bar'
        />
      )}
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
              </div>
            </Popup>
          </Marker>
        ))}
        <LeafletControlGeocoder />
      </MapContainer>
    </div>
  );
};

export default Map;
