import './App.css';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import { Account } from './pages/Account';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Layout from './components/Layout';
import Activity from './pages/Activity';
import Groups from './pages/Groups'

function App () {
  return (
    <>
      <DeviceFrameset device="iPhone X" color="gold">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>} />
              <Route path='/map' element={<Layout><Map /></Layout>} />
              <Route path='/account' element={<Layout><Account /></Layout>} />
              <Route path='/wallet' element={<Layout><Wallet /></Layout>} />
              <Route path='/activity' element={<Layout><Activity /></Layout>} />
              <Route path='/groups' element={<Layout><Groups /></Layout>} />
            </Routes>
          </BrowserRouter>
      </DeviceFrameset>
    </>
  );
}

export default App;
