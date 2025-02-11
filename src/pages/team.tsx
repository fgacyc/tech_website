import Profile from "~/components/Profile";
import SectionHeader from "~/components/SectionHeader";
import JoinCard from "~/components/team/JoinCard";
import UIHead from "~/components/head";
import {getTeams} from "~/api/teams";
import { type Member} from "~/api/interfaces";
import {useState} from "react";



export default  function TeamPage({ allTeamsData }: { allTeamsData: Member[] }) {
  const data = allTeamsData.sort((a, b) => { return a.id - b.id; });

  // add filter to sort by role
  const roles = ["Show All", "Developer" , "Designer","Manager"];
  const Developer = ["Frontend Developer", "Frontend Engineer", "Backend Developer", "Backend Engineer",
    "Full Stack Developer", "Full Stack Engineer", "Mobile Developer", "Mobile Engineer", "Testing Engineer",
    "QA Tester", "Data Analysis", "IoT Developer", "IoT Engineer", "AI Developer", "AI Engineer"];
    const Designer = ["UI/UX Designer"];
    const Manager = ["Ministry Lead", "Ministry PIC", "Executive Director", "Technical Director", "Project Manager", "Product Operations"];

    const [selectedRole, setSelectedRole] = useState("Show All");
    const [filteredData, setFilteredData] = useState<Member[]>(data);

    const handleRoleChange = (role: string) => {
        setSelectedRole(role);
        if (role === "Show All") {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((member) => {
                if (role === "Developer") {
                    return Developer.includes(member.role);
                } else if (role === "Designer") {
                    return Designer.includes(member.role);
                } else if (role === "Manager") {
                    return Manager.includes(member.role);
                } else {
                    return member.role === role;
                }
            }));

        }
    }




  return (
      <>
        <div className="bg-[#1d2129] text-white mt-[72px]">
          <UIHead title={"FGA TECH - Team"}/>
          <SectionHeader
              title="Team"
              desc="Our Professional Team, committed to providing the best service."
          ></SectionHeader>
        </div>
        <div className="flex justify-start gap-4 sm:px-12 px-6 py-12 flex-wrap">
          {roles.map((role) => (
              <button
                  key={role}
                  className={`px-4 py-1 rounded-full font-bold ${
                      selectedRole === role ? "bg-[#1A2F8A] text-white" : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => handleRoleChange(role)}
              >
                {role}
              </button>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center text-white">
          <div className="grid w-[90%] grid-cols-1 gap-x-2 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {filteredData.map((m, index) => {
              return <Profile key={index} member={m}/>;
            })}
          </div>
        </div>

        <JoinCard/>
      </>
  );
};

export const getStaticProps = async () => {
  const allTeamsData: Member[] = await getTeams();
  return {
    props: {
      allTeamsData,
    },
    revalidate: 60,
  };
}


// export async function getStaticProps() {
//   const allTeamsData:Member[] =await getTeams() ;
//   return {
//     props: {
//       allTeamsData,
//     },
//   };
// }