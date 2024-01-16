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
    <div className='flex flex-col w-full relative h-[300px]'>
      <Image
        className=''
        src={src}
        alt={alt}
        width={"100%"}
        height={250}
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
    <Link href={"https://www.imgur.com/a/G6rU8"} target='_blank' className='grid xl:grid-cols-4 gap-20 pl-20 pr-20'>
      {productCardList.map((data, i) => (
        <ProductCard key={i} src={data.cover} alt={data.title} h3={data.title} span={data.description} />
      ))}
    </Link>
  )
}

export default ProductCards