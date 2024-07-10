import React from "react";


interface ProductCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    url: string;
    launch_at: string;
}


const ProductCard: React.FC<ProductCardProps> = ({src, alt, title, description: description, url,launch_at}) => {
    return (
        <div className='flex flex-col  relative object-cover rounded-xl border-1 border-gray-100'>
            <img
                src={src}
                alt={alt}
                className={"object-cover  rounded-t-xl"}
            />
            <div className='text-left p-4 '>
                <a href={url} target='_blank' className='cursor-pointer'>
                    <h4 className="mb-1 font-bold h-[30px] cursor-pointer text-white text-[20px]">{title}</h4>
                    {/*<div className='truncate w-full cursor-pointer text-white text-xl mt-2 mb-3'>{title}</div>*/}
                </a>
                <span className='flex text-white w-full '>{description}</span>
                <span className='text-[#6e6e73] w-full text-sm'>Launch at {launch_at}</span>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductCard