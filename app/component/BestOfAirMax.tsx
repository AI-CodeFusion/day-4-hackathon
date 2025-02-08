"use client"

import {client} from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts, three } from "@/sanity/lib/queries";
import {Product} from "@/types/products";
import Image from 'next/image';
import React,{useEffect, useState} from 'react';

import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForwardOutline } from "react-icons/io5";

const BestOfAirMax = () => {

    const [products, setProducts] = useState<Product[]>([]);
   useEffect (() => {
   async function fetchproducts() {
    const fetchedProduct : Product []= await client.fetch(`*[_type == "product"]{
      _id,
      "id": id,
      productName,
      price,
      "image":image.asset._ref
      }[0..2] `)
    setProducts(fetchedProduct)
   } 
   fetchproducts();
   },[])

  return (
    <div className="w-full mt-24">
      {/* Section Title */}
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

      {/* Product Items */}
     
<div className="flex justify-center px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3u gap-6 max-w-full">
          {products.map((product) => (
            <div key={product._id}>
                {product.image && (
                  <Image
                  src={urlFor(product.image).url()}
                  alt='Product image'
                  width={400}
                  height={190}
                  className="object-cover h-[190px]"/>
                )
                }
                <h3 className=" font-normal text-black text-2xl my-2">{product.productName}</h3>
                <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
            </div>
          ))}
        </div>
</div>
    </div>
  );
}

export default BestOfAirMax;
