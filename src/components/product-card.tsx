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
        <div className='flex flex-col  relative object-cover '>
            <img
                src={src}
                alt={alt}
                className={"object-cover rounded-lg"}
            />
            <div className='text-center'>
                <a href={url} target='_blank' className='cursor-pointer'>
                    <h3 className='truncate w-full cursor-pointer'>{title}</h3>
                </a>
                <span className='flex text-[#adb5bd] w-full'>{span}</span>
            </div>
        </div>
    )
}

export default ProductCard