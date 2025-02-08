import React from 'react';
import Image from 'next/image';
import featureImage from '../images/Image (3).png';

const FeaturesSection = () => (
  <div className="w-full mt-40">
    <h1 className="w-full font-semibold text-center text-xl sm:text-2xl">Features</h1>
    <Image src={featureImage} alt="Features" width={1344} height={500} className="w-full h-[500px] object-cover" />
    <h1 className="font-semibold text-4xl text-center mt-8">STEP INTO WHAT FEELS GOOD</h1>
    <h2 className="text-xl text-center mt-8">
      Cause everyone should know the feeling of running in that perfect pair
    </h2>
    <button className="bg-black rounded-full text-white mt-8 mx-auto w-[150px] h-[40px]">
      Find your shoe
    </button>
  </div>
);

export default FeaturesSection;
