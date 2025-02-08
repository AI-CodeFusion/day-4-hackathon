import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, description }) => (
  <div className="w-80 h-auto flex flex-col items-center">
    <Image src={imageSrc} alt={title} width={300} height={300} />
    <p className="font-bold text-center">{title}</p>
    <p className="text-[#757575] text-center">{price}</p>
    <p className="text-[#757575] text-center">{description}</p>
  </div>
);

export default ProductCard;
