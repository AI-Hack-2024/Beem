import { useState } from 'react';
import './App.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Map from './pages/Map';
import { Account } from './pages/Account';
import Wallet from './pages/Wallet';
import Home from './pages/Home';

function App () {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/account' element={<Account />} />
            <Route path='/wallet' element={<Wallet />} />
          </Routes>
        </BrowserRouter>
      </DeviceFrameset>
    </>
  );
}

export default App;
