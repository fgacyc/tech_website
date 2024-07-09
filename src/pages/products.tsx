import React from 'react'
import ProductCards from '~/components/ProductCards'
import SectionHeader from "~/components/SectionHeader";
import UIHead from "~/components/head";

const Products = () => {
  return (
    <>
      <div className="mb-12 ">
          <UIHead title={"FGA TECH - Products"}/>
          <SectionHeader
              title="Products"
              desc="Series of digital products fully meet your needs."
          ></SectionHeader>
      </div>
        <ProductCards/>
    </>
  )
}

export default Products