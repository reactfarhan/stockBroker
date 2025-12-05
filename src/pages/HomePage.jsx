import React from 'react'
import Navbar from "../components/Navbar/";
import Hero from "../components/Hero";

import MarketChart from '../components/LiveTicker/MarketChart';


const HomePage = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <MarketChart/>
    </>
  )
}

export default HomePage
