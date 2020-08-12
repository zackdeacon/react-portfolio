import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../src/components/Home Component/Home"
import Nav from './components/Nav Bar/Nav';
import Footer from './components/Footer/footer';
import Portfolio from './components/Portfolio Component/portfolio';
import Contact from './components/Contact Component/contact';


function App() {
  return (
    <>
      <Nav />
      {/* <Home /> */}
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
      </>
  );
}

export default App;
