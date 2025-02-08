
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black overflow-hidden">
      {/* Main Section */}
      <div className="flex flex-wrap text-white justify-between px-6 pt-12 lg:flex-nowrap gap-y-8">
        {/* Left Links */}
        <div className="font-semibold w-full sm:w-auto">
          <h1 className="mb-2">Find a store</h1>
          <h1 className="mb-2">Become a member</h1>
          <h1 className="mb-2">Signup for Email</h1>
          <h1 className="mb-2">Send us feedback</h1>
          <h1 className="mb-2">Students Discount</h1>
        </div>

        {/* Get Help */}
        <div className="w-full sm:w-auto">
          <h1 className="font-semibold mb-2">Get help</h1>
          <h3 className="text-[#7e7e7e] mb-1">Order status</h3>
          <h3 className="text-[#7e7e7e] mb-1">Delivery</h3>
          <h3 className="text-[#7e7e7e] mb-1">Returns</h3>
          <h3 className="text-[#7e7e7e] mb-1">Payment options</h3>
          <h3 className="text-[#7e7e7e] mb-1">Contact us on Nike.com Inquiries</h3>
          <h3 className="text-[#7e7e7e] mb-1">Contact us on all other Inquiries</h3>
        </div>

        {/* About Nike */}
        <div className="w-full sm:w-auto">
          <h1 className="font-semibold mb-2">About Nike</h1>
          <h3 className="text-[#7e7e7e] mb-1">News</h3>
          <h3 className="text-[#7e7e7e] mb-1">Careers</h3>
          <h3 className="text-[#7e7e7e] mb-1">Investors</h3>
          <h3 className="text-[#7e7e7e] mb-1">Sustainability</h3>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#7e7e7e] w-full sm:w-auto justify-center">
          <FaTwitter className="text-2xl" />
          <FaFacebook className="text-2xl" />
          <TiSocialYoutubeCircular className="text-2xl" />
          <TiSocialInstagram className="text-2xl" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center gap-12  sm:justify-between mt-12 pb-10 px-6 text-[#f5f5f5] text-sm">
        <div className="flex items-center gap-2 ">
          <IoLocationSharp className="text-lg" />
          <h1>India</h1>
        </div>

        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <FaRegCopyright className="text-[#7e7e7e]" />
          <h1 className="text-[#7e7e7e]">
            2023 Nike.Inc. All Rights Reserved
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-end mt-4 lg:mt-0">
          <h1 className="text-[#7e7e7e]">Guides</h1>
          <h1 className="text-[#7e7e7e]">Terms of sale</h1>
          <h1 className="text-[#7e7e7e]">Term of use</h1>
          <h1 className="text-[#7e7e7e]">Nike Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
