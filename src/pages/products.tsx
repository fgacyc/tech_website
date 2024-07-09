import React from 'react'
import ProductCards from '~/components/ProductCards'
import Head from "next/head";
import SectionHeader from "~/components/SectionHeader";
import UIHead from "~/components/head";

const Products = () => {
  return (
    <>
      <div className="m-12 ml-17">
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