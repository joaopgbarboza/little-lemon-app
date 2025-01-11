import React from "react";
import './App.scss';
import Hero from './components/Hero';
import Nav from './components/Nav'
import Cards from './components/Cards'
import Testimonials from './components/Testimonials'
import Chicago from "./components/Chicago";


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Cards />
      <Testimonials/>
      <Chicago/>
    </>
  )
}

export default App;
