import Image from "next/image";
import React from "react";
import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";

// TODO
// 1. Add link to GitHub etc.
// 2. Set responsive view

export default function team() {
  const members = [
    {
      name: "Innis",
      position: "Full Stack Engineer",
      profilePicPath: "t1",
    },
    {
      name: "Yannis",
      position: "Full Stack Engineer",
      profilePicPath: "t2",
    },
    {
      name: "Jia Hao",
      position: "Full Stack Engineer",
      profilePicPath: "t3",
    },
    {
      name: "Innis",
      position: "Full Stack Engineer",
      profilePicPath: "t1",
    },
    {
      name: "Yannis",
      position: "Full Stack Engineer",
      profilePicPath: "t2",
    },
    {
      name: "Jia Hao",
      position: "Full Stack Engineer",
      profilePicPath: "t3",
    },
  ];
  return (
    <>
      <SectionHeader
        title="About"
        desc="The road of our technology development blessed by God."
      ></SectionHeader>

      <div className="mt-9 flex flex-col items-center">
        <div className="grid w-[90%] grid-cols-2 gap-x-2 gap-y-12">
          <div className="flex-co flex w-4/5 items-center">
            <div>
              FGA KL launched in the home of Dr & Mrs Koh Eng Kiat in Section
              17; about 40 people. The Chinese Church, Youth Church, Finance
              Department, Ladies&apos; Fellowship and School of Christian
              Education & Training were formed in FGA.
            </div>
          </div>
          <div>
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
    </>
  );
}
import Image from "next/image";
import React from "react";
import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";

// TODO
// 1. Add link to GitHub etc.
// 2. Set responsive view

export default function team() {
  return (
    <>
      <SectionHeader
        title="About"
        desc="The road of our technology development blessed by God."
      ></SectionHeader>

      <div className="mt-9 flex flex-col items-center">
        <div className="grid w-[90%] grid-cols-2 gap-x-2 gap-y-12">
          <div className="flex-co flex w-4/5 items-center">
            <div>
              FGA KL launched in the home of Dr & Mrs Koh Eng Kiat in Section
              17; about 40 people. The Chinese Church, Youth Church, Finance
              Department, Ladies&apos; Fellowship and School of Christian
              Education & Training were formed in FGA.
            </div>
          </div>
          <div>
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
    </>
  );
}
