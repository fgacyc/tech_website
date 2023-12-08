import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { IconProps } from "./GitHubIcon";

export default function TwitterIcon(props: IconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <AiOutlineTwitter className="mr-2 h-5 w-5" />
      </a>
    </>
  );
}
