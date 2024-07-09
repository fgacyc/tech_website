import React from "react";

interface SectionHeaderProps {
  title: string;
  desc: string;
  className?: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <>
      <div className="flex flex-col  pt-12 text-white sm:px-12 px-6">
        <h1 className={"mb-4"}>{props.title}</h1>
        <h3>{props.desc}</h3>
      </div>
    </>
  );
};
export default SectionHeader;
