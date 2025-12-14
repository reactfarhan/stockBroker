import React from 'react'
import Navbar from "../components/Navbar/";
import Hero from "../components/Hero";

import MarketChart from '../components/LiveTicker/MarketChart';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

import ProductSection from '../components/ProductScroll/ProductSection';
import AboutUs from '../components/AboutUs/AboutUs';


const HomePage = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <MarketChart/>
    <ProductSection/>
    <AboutUs/>
    <WhyChooseUs/>
    </>
  )
}

export default HomePage
