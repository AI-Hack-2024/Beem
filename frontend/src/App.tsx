import { useState } from 'react';
import './App.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapLibreTileLayer } from "./MapLibreTileLayer.tsx";
import arcades from './arcades.json'
import 'leaflet/dist/leaflet.css'

function App () {
  const [count, setCount] = useState(0);

  return (
    <>
      <DeviceFrameset device="iPhone X" color="gold">
        <h1>Beem Memories</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        <MapContainer
          className="full-height-map"
          center={[38, 139.69222]}
          zoom={6}
          minZoom={3}
          maxZoom={19}
          maxBounds={[[-85.06, -180], [85.06, 180]]}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          TODO: Add markers
        </MapContainer>
      </DeviceFrameset>
    </>
  );
}

export default App;
