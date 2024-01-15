import React from "react";
import { Image } from "@nextui-org/react";
import SocialMediaIcon from "./SocialMediaIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import MailIcon from "./Icons/MailIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import { TeamMember } from "~/pages/team";

interface ProfileProps {
  member: TeamMember;
}

export default function Profile(props: ProfileProps) {
  const changeExtensionFromJPGtoPNG = (fileName: string): string =>
    fileName.endsWith(".jpg") ? fileName.slice(0, -4) + ".png" : fileName;

  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          alt="Card background"
          className="rounded-full object-cover"
          src={changeExtensionFromJPGtoPNG(props.member.avatar)}
          width={200}
          height={200}
        />
        <div className="mt-4">
          <h5 className="font-bold">{props.member.name}</h5>
        </div>
        <div className="mt-1">
          <h5>{props.member.position}</h5>
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-1 flex">
            <GitHubIcon href={props.member.github_url}></GitHubIcon>
            <InstagramIcon href={props.member.instagram_url}></InstagramIcon>
            <LinkedinIcon href={props.member.linkedin_url}></LinkedinIcon>
            <TwitterIcon href={props.member.twitter_url}></TwitterIcon>
            <MailIcon href={"mailto: " + props.member.email}></MailIcon>
            {/* <SocialMediaIcon
              href={"https://www.facebook.com/FGACYC/"}
              src={"facebook"}
              alt={"Facebook Icon"}
            ></SocialMediaIcon> */}
          </div>
        </div>
      </div>
    </>
  );
}
