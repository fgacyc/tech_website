import React from 'react'
import ProductCards from '~/components/ProductCards'
import Head from "next/head";
import SectionHeader from "~/components/SectionHeader";

const Products = () => {
  return (
    <>
      <div className="m-12 ml-17">
          <Head>
              <title>FGA TECH -  Products</title>
              <link rel="icon" href="/FGA_TECH.png" />
          </Head>
          <SectionHeader
              title="Products"
              desc="Series of digital products fully meet your needs."
          ></SectionHeader>
      </div>
      <ProductCards />
    </>
  )
}

export default Products