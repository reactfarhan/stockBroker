import React from 'react'
import Navbar from "../components/Navbar/";
import Hero from "../components/Hero";

import MarketChart from '../components/LiveTicker/MarketChart';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

import ProductSection from '../components/ProductScroll/ProductSection';


const HomePage = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <MarketChart/>
    <ProductSection/>
    <WhyChooseUs/>
    </>
  )
}

export default HomePage
