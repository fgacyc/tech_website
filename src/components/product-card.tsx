import React from "react";


interface ProductCardProps {
    src: string;
    alt: string;
    title: string;
    span: string;
    url: string;
}


const ProductCard: React.FC<ProductCardProps> = ({src, alt, title, span, url}) => {
    return (
        <div className='flex flex-col  relative object-cover rounded-xl border-1 border-gray-100'>
            <img
                src={src}
                alt={alt}
                className={"object-cover  rounded-t-xl"}
            />
            <div className='text-left p-4 '>
                <a href={url} target='_blank' className='cursor-pointer'>
                    <h4 className="mb-1 font-bold h-[30px] cursor-pointer text-white">{title}</h4>
                    {/*<div className='truncate w-full cursor-pointer text-white text-xl mt-2 mb-3'>{title}</div>*/}
                </a>
                <span className='flex text-[#6e6e73] w-full '>{span}</span>
            </div>
        </div>
    )
}

export default ProductCard