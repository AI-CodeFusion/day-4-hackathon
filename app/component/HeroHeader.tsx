import React from 'react';
import Image from 'next/image';
import image from '../images/Image.png';

const HeroHeader = () => (
  <div className="h-full min-w-full mt-40">
    <div className="w-full h-58 bg-[#F5F5F5]">
      <h1 className="text-center font-extrabold pb-4 text-xl sm:text-2xl md:text-3xl">
        Hello Nike App
      </h1>
      <p className="font-medium text-center text-sm sm:text-base">
        Download the app to access everything Nike
      </p>
    </div>
    <Image
      src={image}
      alt="Nike app"
      width={1344}
      height={500}
      className="w-full h-[500px] object-cover"
    />
  </div>
);

export default HeroHeader;
