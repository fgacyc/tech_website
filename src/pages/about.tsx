import Image from "next/image";
import React from "react";
import SectionHeader from "~/components/SectionHeader";
import Head from "next/head";
import UIHead from "~/components/head";

// TODO
// 1. Set responsive view

const About = () => {
  return (
    <>
      <UIHead title={"FGA TECH - About"}/>
      <div className="bg-[#1d2129] text-white ">
        <SectionHeader
            title="About"
            desc="The road of our technology development blessed by God."
        ></SectionHeader>

        <div className=" flex w-full items-center justify-between sm:px-12 px-6 flex-wrap-reverse">
          <div className="text-xl min-w-[300px] max-w-[800px]">
            FGA KL launched in the home of Dr & Mrs Koh Eng Kiat in Section
            17; about 40 people. The Chinese Church, Youth Church, Finance
            Department, Ladies&apos; Fellowship and School of Christian
            Education & Training were formed in FGA.
          </div>
          <img
              alt="wisam fga"
              src={"/images/Wisma FGA.png"}
              className="sm:w-[40%] sm:max-w-[500px] w-full my-10 "
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
