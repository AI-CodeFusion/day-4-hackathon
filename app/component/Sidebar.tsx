import React from 'react'

export default function Sidebar() {
  return (
    <div>
         <div className='w-80 h-full  '>
    <ul>
        <li>Shoes</li>
        <li>Sports Bras</li>
        <li>Tops & Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets </li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Assessories & Equipments</li>
        <li></li>  
    </ul>
    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Gender</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><h1>Men</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Women</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Unisex</h1></div>
    </div>
    

    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Kids</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><h1>Boys</h1></div>
   <div className='flex gap-2'> <input type="checkbox" /><h1>Girls</h1></div>
    </div>

    <div className='mt-16  flex justify-between'>
        <h1 className='font-semibold'>Shop by Price</h1> 
        <select ></select>    
    </div>
    <div className='mt-6 flex flex-col'> 
   <div className='flex gap-2'> <input type="checkbox" /><p>Under &#8377; 2500.00</p></div>
   <div className='flex gap-2'> <input type="checkbox" /><p> &#8377; 2501.00 - &#8377;</p></div>
    </div>
    </div>
    </div>
  )
}
