import React from "react";
import Profile from "~/components/Profile";

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
      <div className="mt-12 flex flex-col items-center">
        <div className="w-4/5">
          <div className="flex  text-4xl font-black">Team</div>
          <div className="font-xl mt-4 flex">
            Our Professional Team, committed to providing the best service.
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-col items-center">
        <div className="grid w-4/5 grid-cols-4 gap-x-2 gap-y-12">
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
    </>
  );
}
