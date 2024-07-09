import React, { useState, useEffect } from 'react'
import { Image } from "@nextui-org/react";
import Link from 'next/link'

type Products = {
  content: string;
  cover: string;
  created_at: string;
  description:string;
  id: number;
  title:string;
  updated_at:string
}

interface ProductCardProps {
  src: string;
  alt: string;
  h3: string;
  span: string;
}

const ProductCard:React.FC<ProductCardProps> = ( {src, alt, h3, span} ) => {
  return (
    <div className='flex flex-col  relative object-cover '>
      <img
        src={src}
        alt={alt}
        className={"object-cover rounded-lg"}
      />
      <div className='text-center'>
        <h3 className='truncate w-full'>{h3}</h3>
        <span className='flex text-[#adb5bd] w-full'>{span}</span>
      </div>
    </div>
  )
}

const ProductCards = () => {
  const [productCardList, setProductCardList] = useState<Products[]>([])

  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch("https://website.fgacyc.com/api/tech/products")
      await data.json().then((data: Products[]) => {
        console.log(data)
        setProductCardList(data)
      })  
    }
    void fetchData()
  }, [])

  return (
     <div className={"grid sm:grid-cols-4 grid-cols-1 sm:gap-20 gap-10 sm:px-12 px-6 w-full"}>
       {
         productCardList.map((data, index) => (
           <Link href={`https://www.imgur.com/a/${data.id}`}
                 target='_blank'
                 className={"cursor-pointer "}
                 key={index}>
             <ProductCard src={data.cover} alt={data.title} h3={data.title} span={data.description} />
              </Link>
            ))
       }
     </div>
  )
}

export default ProductCards