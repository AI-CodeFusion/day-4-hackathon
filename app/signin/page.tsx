import React from 'react'
import Image from 'next/image';
import image from '../images/tick.png.png';
import Link from 'next/link';

const login = () => {
  return (
    <div className='w-[380px] mx-auto mt-24'>
    
 <Image
    src={image}
    alt='image' className='mx-auto'/>
    

    <div className='text-center w-[180px] h-6 text-2xl font-semibold mx-auto mb-24'><h1>YOUR ACCOUNT FOR EVERYTHING NIKE</h1></div>
   
    <div className='  mt-20'>
    <input className='w-[360px] h-10 bg-[#ffffff]  mt-6 text-[#8D8D8D] border border-black-4 mx-auto ' placeholder='Email Address'/>
    <input className='w-[360px] h-10 bg-[#ffffff]  mt-6 text-[#8D8D8D] border border-black-4 mx-auto ' placeholder='Password'/>
    </div>

    <div className=' w-[380px]  mt-7 flex justify-between'>
      <input type="checkbox" />
      <p className='text-[#8d8d8d]'>keep me signed in</p>
      <p className='text-[#bcbcbc]'>forgotten your passward?</p>
    </div>

    <div className='mt-7  mb-7 text-[#8d8d8d] text-center  '> 
        <p>By logging in,you agree to Nike&apos;s <u>Privacy Policy</u> and <u>Terms of Use </u></p>
      </div>

      <div className='mt-7 justify-items-center mb-7 '>
      <Link href="/login"> <button className='bg-black min-w-72  h-10 text-white ml-8'>SIGN IN</button>|</Link>
      </div>

      <div className=' w-380 mt-7 mb-7 flex justify-center'>
        <p className='text-[#8d8d8d]'>Not a member</p>
        <p className='text-black'><u>join us.</u></p>
      </div>
    </div>
  )
}

export default login














