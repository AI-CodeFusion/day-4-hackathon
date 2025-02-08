
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosThumbsUp, IoIosThumbsDown } from "react-icons/io";
import Image from 'next/image';
import image from '../images/Image (12).png';
import image1 from '../images/Image (13).png';
import image2 from '../images/Image (14).png';
import image3 from '../images/Image (15).png';

const Page = () => {
  return (
    <div className='h-full mt-40 sm:mt-10 mb-10 sm:mb-0  max-w-[75%] sm:w-full px-10'>
      {/* Header Section */}
      <div className='text-center'>
        <h1 className='font-semibold text-2xl'>GET HELP</h1>
        <button className="w-full sm:w-[500px] h-[50px] border border-black flex items-center mx-auto px-4 justify-between mt-4">
          What can we help you with?
          <IoSearchOutline />
        </button>
      </div>

      {/* Main Content Section */}
      <div className='flex flex-col lg:flex-row justify-between mt-10 gap-10'>
        {/* Left Content */}
        <div className='lg:w-2/3'>
          <h1 className='font-bold text-2xl mb-4'>WHAT PAYMENT OPTION CAN I USE ON NIKE ORDERS</h1>
          <p className='mb-4'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
          <p className='mb-4'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
          <p className='mb-4'>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local debit or credit card.</p>
          <p className='mb-4'>Apple Pay</p>
          <p className='mb-4'><u>Nike Members</u> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, <u>join us</u> today.</p>

          <div className='flex flex-wrap gap-4 mt-4'>
            <button className='bg-black text-white font-semibold rounded-2xl w-[100px] h-10'>JOIN US</button>
            <button className='bg-black text-white font-semibold rounded-2xl w-[200px] h-10'>SHOP NIKE</button>
          </div>

          <h1 className='mt-8 font-semibold'>FAQs</h1>
          <div className='mt-4'>
            <h2 className='font-semibold'>Does my card need international purchases enabled?</h2>
            <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
          </div>
          <p className='mt-4'>Please note, some banks may charge <u>a small transaction fee</u> for international orders.</p>

          <div className='mt-8'>
            <h2 className='font-semibold'>Can I pay for my order with multiple methods?</h2>
            <p>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
          </div>

          <div className='mt-8'>
            <h2 className='font-semibold'>What payment method is accepted for SNKRS orders?</h2>
            <p>You can use any accepted credit card to pay for your SNKRS orders.</p>
          </div>

          <div className='mt-8'>
            <h2 className='font-semibold'>Why don&apos;t I see Apple Pay as an option?</h2>
            <p>To see Apple Pay as an option in the Nike app or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
          </div>

          <p className='mt-8'>Was this answer helpful?</p>
          <div className='flex gap-2 mt-2'>
            <IoIosThumbsUp />
            <IoIosThumbsDown />
          </div>

          <h1 className='text-[#8c8c8c] mt-10'>RELATED</h1>
          <ul className='ml-4 mt-4 list-disc'>
            <li><u>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</u></li>
            <li className='mt-2'><u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u></li>
          </ul>
        </div>

        {/* Right Content */}
        <div className='lg:w-1/3'>
          <h1 className='font-semibold text-2xl'>CONTACT US</h1>
          <Image src={image} alt='image' className='mt-5 w-full' />

          <p className='font-semibold text-center mt-5'>000 800 919 0566</p>
          <p>Products & Orders: 24 hours a day</p>
          <p>7 days a week</p>
          <p className='text-center'>Company info & Enquiries: 7:30 - 16:30 Monday - Friday</p>

          <Image src={image1} alt='image' className='mt-8 w-full' />
          <p className='mt-5'>24 hours a day</p>
          <p>7 days a week</p>

          <Image src={image2} alt='image' className='mt-8 w-full' />
          <p className='font-semibold'>We&apos;ll reply within</p>
          <p>five business days</p>

          <Image src={image3} alt='image' className='mt-8 w-full' />
          <p className='font-semibold'>STORE LOCATOR</p>
          <p>Find Nike retail stores near you</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
