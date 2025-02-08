
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product } from "@/types/products"
import { groq } from "next-sanity"
import Image from "next/image"

interface ProductPageProps {
  params : {slug : string}
}
async function getProduct(slug:string): Promise <Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    productName,
    _type,
    image, 
    price,
    description
    }`, {slug}
  )
  }

  export default async function ProductPage({params} : ProductPageProps){
    const {slug} = params;
    const product = await getProduct(slug)
    return(
      <div className="max-w-7xl max-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-7 px-10">

          <div className="aspect-square">
            {product.image && (
              <Image 
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
              />
            )}

</div>
<div className=" flex flex-col gap-8">
<h1 className="text-4xl font-bold">
  {product.productName}
</h1>
<p className="text-2xl font-sans">
 Rs. {product.price}
</p>
<p>{product.description}</p>
<button className="bg-black text-white w-32 h-auto p-4">Add to Cart</button>
</div>
        </div>

      </div>
    )
  }