import React from 'react'
import { Image } from "@nextui-org/react";

interface ProductCardProps {
  src: string;
  alt: string;
  h3: string;
  span: string;
}

const ProductCard:React.FC<ProductCardProps> = ( {src, alt, h3, span} ) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        className='border'
      ></Image>
      <h3>{h3}</h3>
      <span>{span}</span>
    </div>
  )
}

const ProductCards = () => {
  return (
    <div className='flex flex-wrap'>
      <ProductCard src='./images/image1.png' alt='image1' h3='Data Analysis Tool' span='Through advnaced data analysis algorithms, it helps you to tap...'/>
      <ProductCard src='./images/image2.png' alt='image2' h3='Data Analysis Tool' span='Through advnaced data analysis algorithms, it helps you to tap...'/>
      <ProductCard src='./images/image3.png' alt='image3' h3='Data Analysis Tool' span='Through advnaced data analysis algorithms, it helps you to tap...'/>
      <ProductCard src='./images/image4.png' alt='image4' h3='Data Analysis Tool' span='Through advnaced data analysis algorithms, it helps you to tap...'/>
      <ProductCard src='./images/image1.png' alt='image1' h3='Data Analysis Tool' span='Through advnaced data analysis algorithms, it helps you to tap...'/>
    </div>
  )
}

export default ProductCards