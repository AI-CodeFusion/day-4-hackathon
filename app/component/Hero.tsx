
import React from 'react';
import Image from 'next/image';
import image from '../images/Image.png';
import image1 from '../images/Image (1).png';
import image2 from '../images/Image (1).png';
import image3 from '../images/Image (2).png';
import image4 from '../images/Image (3).png';
import image5 from '../images/Image (4).png';
import image6 from '../images/Image (5).png';
import image7 from '../images/Image (6).png';
import image8 from '../images/Image (7).png';
import image9 from '../images/Image (8).png';
import image10 from '../images/Image (9).png';
import image11 from '../images/Image (10).png';
import image12 from '../images/Image (11).png';
import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    
    <div className="h-full min-w-full mt-40">

      <div className="w-full h-58 bg-[#F5F5F5]">
        <h1 className="text-center font-extrabold pb-4 text-xl sm:text-2xl md:text-3xl">Hello Nike App</h1>
        <p className="font-medium text-center text-sm sm:text-base">Download the app to access everything Nike</p>
      </div>

      <div>
        <Image
          src={image}
          alt="image"
          width={1344}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="w-full mt-10">
        <p className="text-center text-lg sm:text-xl">First Look</p>
        <h1 className="font-bold text-center text-3xl sm:text-4xl md:text-5xl">NIKE AIR MAX PULSE</h1>
        <p className="text-center font-semibold mt-5 text-sm sm:text-base">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        <p className="text-center font-semibold text-xs sm:text-sm">- Designed to push you past your limits and help you go to the max</p>
      </div>

      <div className="flex justify-center gap-5 pt-10">
        <button className="w-[110px] h-[39px] bg-black rounded-full text-white font-semibold text-sm sm:text-base">Netify</button>
        <button className="bg-black w-[138px] h-[39px] rounded-full text-white text-sm sm:text-base">Shop All Max</button>
      </div>




                                   {/* Next Part, best  of air max */}
      <div className="w-full mt-24 flex items-center justify-between px-6">
        <h2 className="font-semibold text-sm sm:text-lg">Best Of Air Max</h2>
        <h3 className="font-semibold text-sm sm:text-base">Shop</h3>
        <div className="w-[40px] h-[40px] bg-[#f5f5f56c] flex items-center justify-center">
          <GrFormPrevious className="m-3" />
        </div>
        <div className="w-[40px] h-[40px] bg-[#f5f5f5] flex items-center justify-center">
          <IoChevronForwardOutline className="m-3" />
        </div>
      </div>

      <div className="w-full mt-12 flex flex-wrap justify-center gap-10">
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image1} alt="image" width={400} height={400} />
          <p className="font-bold text-center">Nike Air Max Pulse &#8377; 13 995</p>
          <p className="text-[#757575] text-center">Women's Shoes</p>
        </div>
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image2} alt="image" width={400} height={400} />
          <p className="font-bold text-center">Nike Air Max Pulse &#8377; 13 995.00</p>
          <p className="text-[#757575] text-center">Men's Shoes</p>
        </div>
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image3} alt="image" width={400} height={400} />
          <p className="font-bold text-center">Nike Air Max 97 SE &#8377; 16 995.00</p>
          <p className="text-[#757575] text-center">Men's Shoes</p>
        </div>
      </div>










                                        {/* next part, features */}
      <div className="w-full mt-12">
        <h1 className="w-full font-semibold text-center text-xl sm:text-2xl">Features</h1>
        <Image src={image4} alt="image" width={1344} height={500} className="w-full h-[500px] object-cover" />

        <h1 className="font-semibold text-4xl text-center mt-8">STEP INTO WHAT FEELS GOOD</h1>
        <h2 className="text-xl text-center mt-8">Cause everyone should know the feeling of running in that perfect pair</h2>
        <button className="bg-black rounded-full text-white mt-8 mx-auto w-[150px] h-[40px]">Find your shoe</button>
      </div>




                                   {/* next part, gear up */}
      <div className="font-semibold m-12 text-center text-xl">Gear Up</div>

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

      <div className="w-full mt-12 flex flex-wrap gap-10 justify-center">
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image5} alt="image" width={300} height={300} />
          <p className="font-bold text-center">Nike Dry-FIT ADV Techknit &#8377; 3 895</p>
          <p className="text-[#757575] text-center">Men's short-sleeve</p>
          <p className="text-[#757575] text-center">Running Top</p>
        </div>
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image6} alt="image" width={300} height={300} />
          <p className="font-bold text-center">Nike Dry-FIT Chhallenger &#8377; 2 495</p>
          <p className="text-[#757575] text-center">Men 18 cm(approx)2-in-1 versatile shorts</p>
        </div>
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image7} alt="image" width={300} height={300} />
          <p className="font-bold text-center">Nike Dry-FITADV Run division &#8377; 5 295</p>
          <p className="text-[#757575] text-center">Women's long sleeve</p>
          <p className="text-[#757575] text-center">Running top</p>
        </div>
        <div className="w-80 h-auto flex flex-col items-center">
          <Image src={image8} alt="image" width={300} height={300} />
          <p className="font-bold text-center">Nike fast &#8377; 3 795</p>
          <p className="text-[#757575] text-center">Women's mid rise 7/8 running</p>
          <p className="text-[#757575] text-center">Legging with pockets</p>
        </div>
      </div>





                                      {/* next part, Dont miss */}

      <div className="mt-24 ml-12">
        <h1 className="font-semibold">Don't Miss</h1>
      </div>
      <div>
        <Image src={image9} alt="image" width={1344} height={500} className="w-[375px] h-[300px] md:w-full md:h-[500px] object-cover" />
      </div>

      <div className="justify-items-center mt-12 text-center">
        <h1 className="font-semibold text-4xl">FLIGHT ESSENTIALS</h1>
        <h3 className="mt-6 font-semibold">Your built-to-last, all week wear-but with style only Jordon brand can deliver</h3>
        <button className="bg-black text-white font-semibold w-20 h-6 rounded-full mt-8">Shop</button>
      </div>






                                       {/* next part, the essential */}
      <div className="mt-24 ml-12">
        <h1 className="font-semibold mb-6">The Essentials</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="relative w-80">
          <Image src={image10} alt="image" width={440} height={440} className="w-full h-full object-cover" />
          <button className="bg-white w-16 h-5 absolute bottom-10 left-10 rounded-full font-semibold">Men's</button>
        </div>
        <div className="relative w-80">
          <Image src={image11} alt="image" width={440} height={440} className="w-full h-full object-cover" />
          <button className="bg-white w-20 h-5 absolute bottom-10 left-10 rounded-full font-semibold">Women's</button>
        </div>
        <div className="relative w-80">
          <Image src={image12} alt="image" width={440} height={440} className="w-full h-full object-cover" />
          <button className="bg-white w-16 h-5 absolute bottom-10 left-10 rounded-full font-semibold">Kids</button>
        </div>
      </div>

      <div className="flex justify-center gap-32 mt-10 text-center">
        <div>
          <h1 className="font-semibold">Icons</h1>
          <h3>Air force 1</h3>
          <h3>Huarache</h3>
          <h3>Air max 90</h3>
          <h3>Air max 95</h3>
        </div>
        <div>
          <h1 className="font-semibold">Shoes</h1>
          <h3>All Shoes</h3>
          <h3>Custom Shoes</h3>
          <h3>Jordon Shoes</h3>
          <h3>Running Shoes</h3>
        </div>
        <div>
          <h1 className="font-semibold">Clothing</h1>
          <h3>All clothing</h3>
          <h3>Modest wear</h3>
          <h3>Hoodies & pullovers</h3>
          <h3>Shirts & tops</h3>
        </div>
        <div>
          <h1 className="font-semibold">Kid's</h1>
          <h3>Infant & toddler shoes</h3>
          <h3>Kid's Shoes</h3>
          <h3>Kid's Jordon Shoes</h3>
          <h3>Kid's basketball Shoes</h3>
        </div>
      </div>

    </div>
    
  );
}

export default Hero;





















