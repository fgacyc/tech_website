import React from "react";
import {Member} from "~/api/interfaces";


interface ProductCardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    url: string;
    launch_at: string;
    contributors: Member[];
}


const ProductCard: React.FC<ProductCardProps> = ({src, alt, title, description: description, url,launch_at,contributors}) => {
    return (
        <div className='flex flex-col  relative object-cover rounded-xl border-1 border-gray-100'>
            <img
                src={src}
                alt={alt}
                className={"object-cover  rounded-t-xl"}
            />
            <div className='text-left p-4 '>
                <div className={"flex justify-between"}>
                    <a href={url} target='_blank' className='cursor-pointer'>
                        <h4 className="mb-1 font-bold min-h-[30px] cursor-pointer text-white sm:text-[20px] text-[16px]">{title}</h4>
                        {/*<div className='truncate w-full cursor-pointer text-white text-xl mt-2 mb-3'>{title}</div>*/}
                    </a>
                    <div className={"flex"}>
                        {
                            contributors.map((contributor, index) => (
                                <img
                                    key={index}
                                    src={contributor.picture}
                                    alt={contributor.name}
                                    className='w-6 h-6 rounded-full cursor-pointer mr-1'
                                    title={contributor.name}
                                />
                            ))
                        }
                    </div>
                </div>
                <span className='flex text-white w-full sm:text-base text-sm'>{description}</span>
                <span className='text-[#6e6e73] w-full text-sm'>Launch at {launch_at}</span>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductCard