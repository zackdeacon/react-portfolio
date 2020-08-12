import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home Component/Home"
import Nav from './components/Nav Bar/Nav';
import Footer from './components/Footer/footer';
import Portfolio from './components/Portfolio/portfolio';


function App() {
  return (
    <>
      <Nav />
      {/* <Home /> */}
      <Portfolio />
      <Footer />
      </>
  );
}

export default App;
