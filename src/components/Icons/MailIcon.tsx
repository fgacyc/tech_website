import React from "react";
import { IoMail } from "react-icons/io5";
import { IconProps } from "./GitHubIcon";

export default function MailIcon(props: IconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <IoMail className="mr-2 h-5 w-5" />
      </a>
    </>
  );
}
