import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconProps } from "./GitHubIcon";

export default function InstagramIcon(props: IconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <AiOutlineInstagram className="mr-2 h-5 w-5" />
      </a>
    </>
  );
}
