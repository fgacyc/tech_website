import React from "react";
import { Image } from "@nextui-org/react";
import {type Member} from "~/api/interfaces";

interface TeamMemberDataProb {
    member: Member
}

export default function Profile(prob: TeamMemberDataProb) {

    const {member} = prob


    const {name, picture,role} = member

  return (
    <>
      <div className="flex flex-col items-center">
        {
            picture &&  <Image
                alt="Card background"
                className="rounded-full object-cover"
                src={picture}
                width={200}
                height={200}
            />
        }

        <div className="mt-4">
          <h5 className="text-[20px] font-bold ">{name}</h5>
        </div>
        <div className="mt-1 text-[#6e6e73]">
          <h5>{role}</h5>
        </div>
        {/*<div className="flex flex-col items-center ">*/}
        {/*  <div className="mt-1 flex">*/}
        {/*    <GitHubIcon href={github ||""}></GitHubIcon>*/}
        {/*    <InstagramIcon href={instagram ||""}></InstagramIcon>*/}
        {/*    <LinkedinIcon href={linkedIn ||""}></LinkedinIcon>*/}
        {/*    <TwitterIcon href={twitter ||""}></TwitterIcon>*/}
        {/*    <MailIcon href={"mailto: " + email}></MailIcon>*/}
        {/*    */}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
}
