import React from "react";
import { Image } from "@nextui-org/react";
import SocialMediaIcon from "./SocialMediaIcon";
import GitHubIcon from "./Icons/GitHubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import MailIcon from "./Icons/MailIcon";
import TwitterIcon from "./Icons/TwitterIcon";

interface ProfileProps {
  name: string;
  position: string;
  profilePicPath: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          alt="Card background"
          className="rounded-full object-cover"
          src={"/images/profile-pic/" + props.profilePicPath + ".png"}
          width={200}
          height={200}
        />
        <div className="mt-4 font-bold">{props.name}</div>
        <div className="mt-1">{props.position}</div>
        <div className="flex flex-col items-center">
          <div className="mt-1 flex">
            <GitHubIcon href="https://www.github.com"></GitHubIcon>
            <InstagramIcon href="https://www.github.com"></InstagramIcon>
            <LinkedinIcon href="https://www.github.com"></LinkedinIcon>
            <TwitterIcon href="https://www.github.com"></TwitterIcon>
            <MailIcon href="https://www.github.com"></MailIcon>
            <SocialMediaIcon
              href={"https://www.facebook.com/FGACYC/"}
              src={"facebook"}
              alt={"Facebook Icon"}
            ></SocialMediaIcon>
          </div>
        </div>
      </div>
    </>
  );
}
