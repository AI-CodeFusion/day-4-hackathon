
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import Image from 'next/image';
// import Sidebar from '../component/Sidebar';
// import { Product } from '@/types/products';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';

// const Page = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state
  
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         // Fetching products from Sanity
//         const fetchedProduct = await client.fetch(`*[_type == "product"]{
//           _id,
//           "id": id,
//           productName,
//           price,
//           "image": image.asset->url,
//           image,
//           "slug": slug.current
//         }`);

//         if (fetchedProduct.length === 0) {
//           setError('No products found'); // If no products are found
//         } else {
//           setProducts(fetchedProduct);
//         }
//       } catch (err) {
//         setError('Failed to fetch products.'); // Handling fetch errors
//         console.error(err);
//       } finally {
//         setLoading(false); // Stop loading after data fetch
//       }
//     }

//     fetchProducts();
//   }, []);
  
//   if (loading) {
//     return (
//       <div className="mt-40 md:m-10 lg:m-20 text-center">
//         <p>Loading products...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="mt-40 md:m-10 lg:m-20 text-center text-red-500">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-40 md:m-10 lg:m-20">
//       {/* Header Section */}
//       <div className='flex flex-wrap justify-between items-center mb-6'>
//         <h1 className='font-bold text-lg md:text-xl'>New (500)</h1>
//         <div className='flex gap-2 items-center text-sm md:text-base'>
//           <p>Hide filter</p>
//           <HiOutlineAdjustmentsHorizontal className='text-lg md:text-xl' />
//           <select className='border rounded px-2 py-1'>
//             <option value="sort by">Sort by</option>
//           </select>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className='flex flex-col md:flex-row gap-6'>
//         {/* Sidebar */}
//         <div className='w-full md:w-1/4'>
//           <Sidebar />
//         </div>
        
//         {/* Product Items */}
//         <div className="w-full md:w-3/4">
//         <div className="flex justify-center px-7">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
//           {products.map((product) => (
//             <div key={product._id}>
//               <Link href={`/Product/${product.slug.current}`}>
//                 {product.image && (
//                   <Image
//                   src={urlFor(product.image).url()}
//                   alt='Product image'
//                   width={400}
//                   height={190}
//                   className="object-cover h-[190px]"/>
//                 )
//                 }
//                 <h3 className=" font-normal text-black text-2xl my-2">{product.productName}</h3>
//                 <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
//                 </Link>
//             </div>
//           ))}
//         </div>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;










'use client'
import React, { useEffect, useState } from 'react';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Image from 'next/image';
import Sidebar from '../component/Sidebar';
import { Product } from '@/types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart } from '../action/action';
import Swal from 'sweetalert2';


const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product"]{
          _id,
          "id": id,
          productName,
          price,
          "image": image.asset->url,
          "slug": slug.current
        }`);

        if (fetchedProducts.length === 0) {
          setError('No products found');
        } else {
          // Filter out products with missing or invalid slugs
          const validProducts = fetchedProducts.filter((product: Product) => product.slug);
          setProducts(validProducts);
        }
      } catch (err) {
        setError('Failed to fetch products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) =>{
    e.preventDefault()
    Swal.fire ({
      position : "top-end",
      icon : "success",
      title : `${product.productName} added to cart`,
      showConfirmButton : false,
      timer :1000
    })
    addToCart(product)
  
    
  }

  if (loading) {
    return (
      <div className="mt-40 md:m-10 lg:m-20 text-center">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-40 md:m-10 lg:m-20 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-40 md:m-10 lg:m-20">
      {/* Header Section */}
      <div className='flex flex-wrap justify-between items-center mb-6'>
        <h1 className='font-bold text-lg md:text-xl'>New (500)</h1>
        <div className='flex gap-2 items-center text-sm md:text-base'>
          <p>Hide filter</p>
          <HiOutlineAdjustmentsHorizontal className='text-lg md:text-xl' />
          <select className='border rounded px-2 py-1'>
            <option value="sort by">Sort by</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Sidebar */}
        <div className='w-full md:w-1/4'>
          <Sidebar />
        </div>
        
        {/* Product Items */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-center px-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
              {products.map((product) => (
                <div key={product._id}>
                  {/* Check if slug exists before creating the link */}
                  {product.slug ? (
                    <Link href={`/product/${product.slug}`}>
                      {product.image && (
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.productName || 'Product image'}
                          width={400}
                          height={190}
                          className="object-cover h-[190px]"
                        />
                      )}
                      <h3 className="font-normal text-black text-2xl my-2">{product.productName}</h3>
                      <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
                      <button className='bg-black text-white w-32 h-auto p-2 my-5 ' 
                      onClick={(e) => handleAddToCart (e,product)}
                      > Add to Cart

                      </button>

                    </Link>
                  ) : (
                    <div>
                      {product.image && (
                        <Image
                          src={urlFor(product.image).url()}
                          alt={product.productName || 'Product image'}
                          width={400}
                          height={190}
                          className="object-cover h-[190px]"
                        />
                      )}
                      <h3 className="font-normal text-black text-2xl my-2">{product.productName}</h3>
                      <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;