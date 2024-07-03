import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Account from './pages/Account';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Layout from './components/Layout';
import Activity from './pages/Activity';
import Groups from './pages/Groups';
import { Theme } from '@radix-ui/themes';
import '@smastrom/react-rating/style.css';
import Rewards from './pages/Rewards';
import GroupActivity from './pages/GroupActivity';
import Action from './pages/Actions';
import Souvenirs from './pages/Souvenirs';
import Success from './pages/Success';
import {
  RecoilRoot,
} from 'recoil';

function App() {
  return (
    <Theme>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path='/map'
              element={
                <Layout>
                  <Map />
                </Layout>
              }
            />
            <Route
              path='/account'
              element={
                <Layout>
                  <Account />
                </Layout>
              }
            />
            <Route
              path='/wallet'
              element={
                <Layout>
                  <Wallet />
                </Layout>
              }
            />
            <Route
              path='/activity'
              element={
                <Layout>
                  <Activity />
                </Layout>
              }
            />
            <Route
              path='/groups'
              element={
                <Layout>
                  <Groups />
                </Layout>
              }
            />
            <Route
              path='/rewards'
              element={
                <Layout>
                  <Rewards />
                </Layout>
              }
            />
            <Route
              path='/group/:name/:emoji'
              element={
                <Layout>
                  <GroupActivity />
                </Layout>
              }
            />
            <Route
              path='/action/:action'
              element={
                <Layout>
                  <Action />
                </Layout>
              }
            />
            <Route
              path='/success/:action'
              element={
                <Layout>
                  <Success />
                </Layout>
              }
            />
            <Route
              path='/souvenir'
              element={
                <Layout>
                  <Souvenirs />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Theme>
  );
}

export default App;
