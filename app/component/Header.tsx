import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../images/logo.png.png'


const TopHeader = () => {
  return (
    <div className='w-[100%] h-38 bg-[#F5F5F5] overflow-hidden'>
<div className='pl-7 pt-2'>
  <Image
  src={image}
  alt='image'/>
</div>
<div className='pb-3 sm:-mt-2'><div className=' sm:flex justify-end  gap-5 ml-5 sm:ml-0 sm:mr-10 sm:-mt-3 font-semibold'>
  <Link href="/products"> find a store |</Link>
  <Link href="/help"> help |</Link>
  <Link href="/joinus"> join us | </Link>
  <Link href="/signin"> signin | </Link>
</div>
</div>
    </div>
  )
}

export default TopHeader
