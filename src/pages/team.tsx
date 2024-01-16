import React, { useEffect } from "react";
import { getReq } from "~/api/requests";
import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";
import JoinCard from "~/components/team/JoinCard";

export type TeamMember = {
  avatar: string;
  created_at: string;
  email: string;
  github_url: string;
  id: number;
  instagram_url: string;
  linkedin_url: string;
  name: string;
  position: string;
  twitter_url: string;
  updated_at: string;
};

const Team = () => {
  const [members, setMembers] = React.useState<TeamMember[]>([]);

  useEffect(() => {
    const getMembers = async () => {
      try {
        let res = await getReq("/members");
        console.log(res);

        setMembers(res);
      } catch (error) {
        console.error("Error during getBlogs:", error);
      }
    };
    getMembers();
  }, []);

  return (
    <>
      <div className="bg-[#1d2129] text-white">
        <SectionHeader
          title="Team"
          desc="Our Professional Team, committed to providing the best service."
        ></SectionHeader>

        <div className="mt-9 flex flex-col items-center ">
          <div className="grid w-[90%] grid-cols-1 gap-x-2 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {members.map((m, index) => {
              return <Profile key={index} member={m} />;
            })}
          </div>
        </div>

        <JoinCard />
      </div>
    </>
  );
};

export default Team;
