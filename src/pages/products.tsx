import React from 'react'
import SectionHeader from "~/components/SectionHeader";
import UIHead from "~/components/head";
import ProductCard from "~/components/product-card";
import type {Product} from "~/api/interfaces";
import {getProducts} from "~/api/product";

export default function ProductsPage({allProductData}: { allProductData: Product[] })  {
  return (
      <>
          <div className="mb-12 mt-[72px]">
              <UIHead title={"FGA TECH - Products"}/>
              <SectionHeader
                  title="Products"
                  desc="Series of digital products fully meet your needs."
              ></SectionHeader>
          </div>
          <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 sm:px-12 px-6 w-full"}>
              {
                  allProductData.length > 0 && allProductData.map((data, index) =>
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