import React, { useEffect } from "react";
import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";
import JoinCard from "~/components/team/JoinCard";
import UIHead from "~/components/head";
import {getTeams} from "~/api/teams";
import {Member} from "~/api/interfaces";



export default  function Team({ allTeamsData }: { allTeamsData: Member[] }) {
  // sort the data by id
  const data = allTeamsData.sort((a, b) => { return a.id - b.id; });

  return (
    <>
      <div className="bg-[#1d2129] text-white">
        <UIHead title={"FGA TECH - Team"}/>
        <SectionHeader
            title="Team"
            desc="Our Professional Team, committed to providing the best service."
        ></SectionHeader>

        <div className="mt-9 flex flex-col items-center ">
          <div className="grid w-[90%] grid-cols-1 gap-x-2 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {allTeamsData.map((m, index) => {
              return <Profile key={index} member={m}/>;
            })}
          </div>
        </div>

        <JoinCard />
      </div>
    </>
  );
};





export async function getStaticProps() {
  const allTeamsData:Member[] =await getTeams() ;
  return {
    props: {
      allTeamsData,
    },
  };
}