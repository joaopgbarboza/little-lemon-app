import React from "react";
import '../App.scss';


import Hero from './Hero';
import Nav from './Nav'
import Cards from './Cards'
import Testimonials from './Testimonials'
import Chicago from "./Chicago";
import Footer from "./Footer";


const HomePage = () => {
  return (
    <>

        <Nav />
        <Hero />
        <Cards />
        <Testimonials/>
        <Chicago/>
        <Footer/>

    </>
  )
}

export default HomePage;
