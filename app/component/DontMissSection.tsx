import React from 'react';
import Image from 'next/image';
import image9 from '../images/Image (8).png';

const DontMissSection = () => (
  <div className="w-full m-20">
    <h1 className="text-center font-bold text-2xl sm:text-3xl">Don’t Miss</h1>
    <div className="relative mt-6">
      <Image
        src={image9}
        alt="Don't Miss Promo"
        className="w-full h-auto rounded-lg"
      />
      <div className="absolute bottom-8 left-8 text-white">
        <h2 className="text-2xl font-bold">Never Miss a Deal</h2>
        <p className="mt-2">Stay updated with the latest trends and offers.</p>
        <button className="bg-white text-black rounded-full px-6 py-2 mt-4">
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default DontMissSection;
