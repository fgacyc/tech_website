import Image from "next/image";
import React from "react";
import SectionHeader from "~/components/SectionHeader";

// TODO
// 1. Set responsive view

const About = () => {
  return (
    <>
      <div className="bg-[#1d2129] text-white ">
        <SectionHeader
            title="About"
            desc="The road of our technology development blessed by God."
        ></SectionHeader>

        <div className=" flex w-full items-center justify-between sm:px-12 px-6 flex-wrap-reverse">
          <div className="text-xl min-w-[300px]">
            FGA KL launched in the home of Dr & Mrs Koh Eng Kiat in Section
            17; about 40 people. The Chinese Church, Youth Church, Finance
            Department, Ladies&apos; Fellowship and School of Christian
            Education & Training were formed in FGA.
          </div>
          <img
              alt=""
              src={"/images/Wisma FGA.png"}
              className="sm:w-[40%] w-full my-10"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
