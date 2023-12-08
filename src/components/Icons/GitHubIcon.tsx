import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

export interface IconProps {
  href: string;
}

export default function GitHubIcon(props: IconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <AiOutlineGithub className="mr-2 h-5 w-5" />
      </a>
    </>
  );
}
