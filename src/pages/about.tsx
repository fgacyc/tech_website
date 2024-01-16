import Image from "next/image";
import React from "react";
import SectionHeader from "~/components/SectionHeader";

// TODO
// 1. Set responsive view

const About = () => {
  return (
    <>
      <div className="bg-[#1d2129] text-white">
        <SectionHeader
          title="About"
          desc="The road of our technology development blessed by God."
        ></SectionHeader>

        <div className="mt-9 flex flex-col items-center bg-[#1d2129] text-white">
          <div className="mb-9 grid w-[90%] grid-cols-2 gap-x-2 gap-y-12">
            <div className="flex-co flex w-4/5 items-center">
              <div className="text-xl">
                FGA KL launched in the home of Dr & Mrs Koh Eng Kiat in Section
                17; about 40 people. The Chinese Church, Youth Church, Finance
                Department, Ladies&apos; Fellowship and School of Christian
                Education & Training were formed in FGA.
              </div>
            </div>
            <div className="my-auto">
              <div>
                <Image
                  alt=""
                  src={"/images/Wisma FGA.png"}
                  width={100}
                  height={100}
                  className="w-[80%]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
