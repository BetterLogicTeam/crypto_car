import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarCrypto from './components/Navbar/Navbar';
import LandPage from './components/LandPage/LandPage';
import SuperMint from './components/Mint/SuperMint';
import Overview from './components/Overview/Overview';
import NFT from './components/NFT/NFT';
import Slides from './components/Carousel/Carousel';
import Game from './components/Game/Game';
import Roadmap from './components/Roadmap/Roadmap';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq'
function App() {
  return (
    <div>
      <ToastContainer/>
      <NavbarCrypto  />
            <LandPage/>
            <SuperMint/>
            <Overview/>
            <NFT/>
            <Slides/>
            <Game/>
          <Roadmap/>
            <Faq/>
            <Footer />
    </div>
  );
}

export default App;
