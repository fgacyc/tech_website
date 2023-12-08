import React from "react";
import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";
import JoinCard from "~/components/team/JoinCard";

// TODO
// 1. Add link to GitHub etc.
// 2. Set responsive view

const Team = () => {
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
      <div className="bg-[#1d2129] text-white">
        <SectionHeader
          title="Team"
          desc="Our Professional Team, committed to providing the best service."
        ></SectionHeader>

        <div className="mt-9 flex flex-col items-center ">
          <div className="grid w-[90%] grid-cols-4 gap-x-2 gap-y-12">
            {members.map((profile, index) => {
              return (
                <Profile
                  key={index}
                  name={profile.name}
                  position={profile.position}
                  profilePicPath={profile.profilePicPath}
                />
              );
            })}
          </div>
        </div>

        <JoinCard />
      </div>
    </>
  );
};

export default Team;
