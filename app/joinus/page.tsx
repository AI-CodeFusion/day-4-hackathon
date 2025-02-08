

import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='w-[70%] sm:w-full sm:max-w-md sm:mx-auto mt-32 sm:mt-10 p-6'>
      <h1 className='font-bold text-2xl text-gray-700 text-center'>BECOME A NIKE MEMBER</h1>
      <p className='text-gray-600 text-center mt-2'>Create your Nike member profile and get first access to the very best of Nike products, inspiration & community.</p>

      <form className='mt-6 space-y-4'>
        <input
          className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
          placeholder='Email Address'
          type='email'
        />
        <input
          className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
          placeholder='Password'
          type='password'
        />
        <input
          className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
          placeholder='First Name'
          type='text'
        />
        <input
          className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
          placeholder='Last Name'
          type='text'
        />
        <input
          className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
          placeholder='Birthday'
          type='date'
        />
        <p className='text-sm text-gray-600'>Get Nike Member Reward every year on your birthday.</p>

        <select className='w-full h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="UAE">UAE</option>
        </select>

        <div className='flex justify-between items-center space-x-4'>
          <input
            className='w-1/2 h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
            placeholder='Male'
            type='text'
          />
          <input
            className='w-1/2 h-12 bg-white text-gray-700 border border-gray-300 rounded-md px-4'
            placeholder='Female'
            type='text'
          />
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='w-5 h-5 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-black'
          />
          <p className='text-sm text-gray-600 ml-3'>Sign up for emails to get updates from Nike on products, offers, and your Member benefits.</p>
        </div>

        <p className='text-xs text-center text-gray-600 mt-4'>
          By creating an account, you agree to Nike&apos;s <u>Privacy Policy</u> and <u>Terms of Use</u>.
        </p>

        <div className='mt-6'>
          <Link href="/signin">
            <button className='w-full bg-black text-white text-sm font-semibold h-12 rounded-md'>JOIN US</button>
          </Link>
        </div>
      </form>

      <div className='flex justify-center items-center space-x-2 mt-6'>
        <p className='text-gray-600'>Already a member?</p>
        <Link href='/signin'>
          <p className='text-black underline'>Sign In.</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
