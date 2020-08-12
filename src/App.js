import React from 'react';
import Home from "../src/components/Home Component/Home"
import Nav from './components/Nav Bar/Nav';
import Footer from './components/Footer/footer';
import Portfolio from './components/Portfolio Component/portfolio';
import Contact from './components/Contact Component/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
      </>
    </Router>
      
  );
}

export default App;
