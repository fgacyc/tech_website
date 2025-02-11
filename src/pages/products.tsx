import React, {useState} from 'react'
import SectionHeader from "~/components/SectionHeader";
import UIHead from "~/components/head";
import ProductCard from "~/components/product-card";
import type {Product} from "~/api/interfaces";
import {getProducts} from "~/api/product";

export default function ProductsPage({allProductData}: { allProductData: Product[] })  {
    // add filter to sort by product type
    const types = ["Show All", "Event", "Tool"];
    const [selectedType, setSelectedType] = useState("SHOW ALL");
    const [filteredData, setFilteredData] = useState(allProductData);

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
        if (type === "Show All") {
            setFilteredData(allProductData);
        } else {
            setFilteredData(allProductData.filter((product) => product.type === type));
        }
    };


  return (
      <>
          <div className="mb-12 mt-[72px]">
              <UIHead title={"FGA TECH - Products"}/>
              <SectionHeader
                  title="Products"
                  desc="Series of digital products fully meet church needs."
              ></SectionHeader>
          </div>
            <div className="flex justify-start gap-4 sm:px-12 px-6 pb-12 flex-wrap">
                {types.map((type) => (
                    <button
                        key={type}
                        className={`px-4 py-1 rounded-full font-bold ${
                            selectedType === type ? "bg-[#1A2F8A] text-white" : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() => handleTypeChange(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>
          <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 sm:px-12 px-6 w-full"}>
              {
                  filteredData.length > 0 && filteredData.map((data, index) =>
                      <ProductCard src={data.picture}
                                   alt={data.name}
                                   title={data.name}
                                   description={data.description}
                                   url={data.url}
                                   contributors={data.contributors}
                                   launch_at={data.launch_at}
                                   key={index} />
                  )
              }
          </div>
      </>
  )
}

export const getStaticProps  = async () => {
  const allProductData:Product[] = await getProducts();
  return {
    props: {
      allProductData,
    },
      revalidate: 60,
  };
}


// export async function getStaticProps() {
//     const allProductData:Product[] = await getProducts();
//     return {
//         props: {
//             allProductData,
//         },
//     };
// }