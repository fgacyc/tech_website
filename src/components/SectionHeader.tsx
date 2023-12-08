import React from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface SectionHeaderProps {
  title: string;
  desc: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <>
      <div className="flex flex-col items-center bg-[#1d2129] pt-12 text-white">
        <div className="w-[90%]">
          <div className="flex  text-4xl font-black">{props.title}</div>
          <div className="font-xl mt-4 flex">{props.desc}</div>
        </div>
      </div>
    </>
  );
}
