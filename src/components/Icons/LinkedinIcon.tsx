import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IconProps } from "./GitHubIcon";

export default function LinkedinIcon(props: IconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <AiOutlineLinkedin className="mr-2 h-5 w-5" />
      </a>
    </>
  );
}
