import React from 'react'
import Image from 'next/image'
import image10 from '../images/Image (9).png'
import image11 from '../images/Image (10).png'
import image12 from '../images/Image (11).png'

export default function EssentialsSection() {
  return (
    <div>
        <div className="mt-24 ml-12">
        <h1 className="font-semibold mb-6">The Essentials</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="relative w-80">
          <Image src={image10} alt="image" width={440} height={440} className="w-full h-full object-cover" />
          <button className="bg-white w-16 h-5 absolute bottom-10 left-10 rounded-full font-semibold">Men&apos;s</button>
        </div>
        <div className="relative w-80">
          <Image src={image11} alt="image" width={440} height={440} className="w-full h-full object-cover" />
          <button className="bg-white w-20 h-5 absolute bottom-10 left-10 rounded-full font-semibold">Women&apos;s</button>
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
          <h1 className="font-semibold">Kid&apos;s</h1>
          <h3>Infant & toddler shoes</h3>
          <h3>Kid&apos;s Shoes</h3>
          <h3>Kid&apos;s Jordon Shoes</h3>
          <h3>Kid&apos;s basketball Shoes</h3>
        </div>
      </div>

    </div>
  )
}
