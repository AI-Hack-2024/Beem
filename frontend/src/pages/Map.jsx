import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import LeafletControlGeocoder from '../components/LeafletControlGeocoder';

const Map = () => {
  const position = [-33.8657, 151.2159];
  const operaBar = [-33.85833, 151.21385];

  return (
    <>
      <h1>THIS IS WORKING</h1>
      <MapContainer
        center={position}
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
        <Marker position={operaBar}>
          <Popup>Opera Bar</Popup>
        </Marker>
        <LeafletControlGeocoder />
      </MapContainer>
    </>
  );
};

export default Map;
