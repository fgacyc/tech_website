import React from "react";

interface SocialMediaIconProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialMediaIcon(props: SocialMediaIconProps) {
  return (
    <>
      <a href={props.href} target="_blank">
        <img
          src={"/icons/" + props.src + ".svg"}
          alt={props.alt}
          className="mr-2 h-5 w-5"
        />
      </a>
    </>
  );
}
