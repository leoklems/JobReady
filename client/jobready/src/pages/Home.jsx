import React from 'react';
import MainSection from '../components/MainSection'; // Ensure this import path is correct
import FeaturesSection from '../components/FeaturesSection'; // Ensure this import path is correct
import MainBanner from '../components/MainBanner'; // Ensure this import path is correct
import TestimonialSlider from '../components/TestimonialSlider'; // Ensure this import path is correct
import SubscribeSection from '../components/SubscribeSection'; // Ensure this import path is correct

function Home() {
  return (
    <div>
      <MainSection /> 
      <FeaturesSection /> 
      <MainBanner /> 
      <TestimonialSlider /> 
      <SubscribeSection /> 
    </div>
  );
}

export default Home;
