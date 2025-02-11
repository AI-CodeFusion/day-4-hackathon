import React from 'react';
import Image from 'next/image';
import { GrFormPrevious } from 'react-icons/gr';
import { IoChevronForwardOutline } from 'react-icons/io5';
import image5 from '../images/Image (4).png';
import image6 from '../images/Image (5).png';
import image7 from '../images/Image (6).png';
import image8 from '../images/Image (7).png';

const GearUpSection = () => (
  <div className="w-full mt-12">
    {/* Section Heading */}
    <div className="font-semibold m-12 text-center text-xl">Gear Up</div>

    {/* Shop Options */}
    <div className="flex justify-between flex-wrap px-6">
      <div className="flex items-center gap-3 w-[45%] sm:w-[48%] md:w-[22%] justify-between">
        <h3 className="font-semibold">Men Shop</h3>
        <div className="flex gap-3">
          <GrFormPrevious className="size-6" />
          <IoChevronForwardOutline className="size-6" />
        </div>
      </div>

      <div className="flex items-center gap-3 w-[45%] sm:w-[48%] md:w-[22%] justify-between">
        <h3 className="font-semibold">Women Shop</h3>
        <div className="flex gap-3">
          <GrFormPrevious className="size-6" />
          <IoChevronForwardOutline className="size-6" />
        </div>
      </div>
    </div>

    {/* Product Cards */}
    <div className="w-full mt-12 flex flex-wrap gap-10 justify-center">
      <div className="w-80 h-auto flex flex-col items-center">
        <Image src={image5} alt="Nike Dry-FIT ADV Techknit" width={300} height={300} />
        <p className="font-bold text-center">Nike Dry-FIT ADV Techknit &#8377; 3 895</p>
        <p className="text-[#757575] text-center">Men&apos;s short-sleeve</p>
        <p className="text-[#757575] text-center">Running Top</p>
      </div>

      <div className="w-80 h-auto flex flex-col items-center">
        <Image src={image6} alt="Nike Dry-FIT Challenger" width={300} height={300} />
        <p className="font-bold text-center">Nike Dry-FIT Challenger &#8377; 2 495</p>
        <p className="text-[#757575] text-center">Men 18 cm (approx) 2-in-1 versatile shorts</p>
      </div>

      <div className="w-80 h-auto flex flex-col items-center">
        <Image src={image7} alt="Nike Dry-FIT ADV Run Division" width={300} height={300} />
        <p className="font-bold text-center">Nike Dry-FIT ADV Run Division &#8377; 5 295</p>
        <p className="text-[#757575] text-center">Women&apos;s long sleeve</p>
        <p className="text-[#757575] text-center">Running Top</p>
      </div>

      <div className="w-80 h-auto flex flex-col items-center">
        <Image src={image8} alt="Nike Fast" width={300} height={300} />
        <p className="font-bold text-center">Nike Fast &#8377; 3 795</p>
        <p className="text-[#757575] text-center">Women&apos;s mid rise 7/8 running</p>
        <p className="text-[#757575] text-center">Legging with pockets</p>
      </div>
    </div>
  </div>
);

export default GearUpSection;
