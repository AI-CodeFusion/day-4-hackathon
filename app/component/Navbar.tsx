
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import tickImage from '../images/tick.png.png';
import heartImage from '../images/heart.png.png';
import lockImage from '../images/lock.png.png';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font w-[85%] sm:w-full h-16 bg-white shadow ">
      <div className="container mx-auto flex flex-wrap px-4 py-2 md:flex-row items-center">
        {/* Logo */}
        <Image
          src={tickImage}
          alt="Brand logo"
          width={48}
          height={48}
          className="mr-4"
        />

        {/* Navigation */}
        <nav className="md:ml-auto grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap items-center text-base text-center font-bold">
          <a className="mr-5 hover:text-gray-900 transition duration-200">New and Feature</a>
          <a className="mr-5 hover:text-gray-900 transition duration-200">Men</a>
          <a className="mr-5 hover:text-gray-900 transition duration-200">Women</a>
          <a className="mr-5 hover:text-gray-900 transition duration-200">Kids</a>
          <a className="mr-5 hover:text-gray-900 transition duration-200">Sales</a>
          <a className="mr-5 hover:text-gray-900 transition duration-200">SNKRS</a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base transition duration-200"
          >
            <IoSearchOutline className="mr-2" />
            Search
          </button>
          <Image
            src={heartImage}
            alt="Wishlist"
            width={36}
            height={36}
          />
          <Image
            src={lockImage}
            alt="Account"
            width={36}
            height={36}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
