import React from 'react'
import HeroHeader from "./component/HeroHeader";
import HighlightSection from './component/HighlightSection';
import FeaturesSection from './component/FeaturesSection';
import GearUpSection from './component/GearUpSection';
import DontMissSection from './component/DontMissSection';
import EssentialsSection from './component/EssentialsSection';
import BestOfAirMax from './component/BestOfAirMax';

const page = () => {
  return (
    <div>
      <HeroHeader/>
      <HighlightSection/>
      <BestOfAirMax/>
      <FeaturesSection/>
      <GearUpSection/>
      <DontMissSection/>
      <EssentialsSection/>
      </div>
  )
}

export default page
  
    