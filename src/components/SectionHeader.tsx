import React from "react";

interface SectionHeaderProps {
  title: string;
  desc: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#1d2129] pt-12 text-white">
        <div className="w-full px-12">
          <div className="flex font-black">
            <h1>{props.title}</h1>
          </div>
          <div className="mt-4 flex">
            <h3>{props.desc}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionHeader;
