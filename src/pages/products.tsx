import React from 'react'
import SectionHeader from "~/components/SectionHeader";
import UIHead from "~/components/head";
import ProductCard from "~/components/product-card";
import type {Product} from "~/api/interfaces";
import {getProducts} from "~/api/product";

export default function ProductsPage({allProductData}: { allProductData: Product[] })  {
  return (
      <>
          <div className="mb-12 ">
              <UIHead title={"FGA TECH - Products"}/>
              <SectionHeader
                  title="Products"
                  desc="Series of digital products fully meet your needs."
              ></SectionHeader>
          </div>
          <div className={"grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1  gap-10 sm:px-12 px-6 w-full"}>
              {
                  allProductData.length > 0 && allProductData.map((data, index) =>
                      <ProductCard src={data.picture} alt={data.name} title={data.name} span={data.description} url={data.url} key={index} />
                  )
              }
          </div>
      </>
  )
}

export const getStaticProps = async () => {
  const allProductData:Product[] = await getProducts();
  return {
    props: {
      allProductData,
    },
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