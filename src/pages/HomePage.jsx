import React from 'react'
import Navbar from "../components/Navbar/";
import Hero from "../components/Hero";

import MarketChart from '../components/LiveTicker/MarketChart';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';


const HomePage = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <MarketChart/>
    <WhyChooseUs/>
    </>
  )
}

export default HomePage
