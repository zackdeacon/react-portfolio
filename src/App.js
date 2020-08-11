import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home Component/Home"
import Nav from './components/Nav Bar/Nav';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
      </>
  );
}

export default App;
