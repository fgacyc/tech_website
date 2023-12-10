import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  desc: string;
  author: string;
  date: string;
  imgPath: string;
  profilePicPath: string;
}

const BlogCard = (props: BlogCardProps) => {
  const changeExtensionFromJPGtoPNG = (fileName: string): string =>
    fileName.endsWith(".jpg") ? fileName.slice(0, -4) + ".png" : fileName;

  return (
    <div className="mb-16 mr-5 flex flex-col md:mb-28 md:flex-row">
      <Image
        src={props.imgPath}
        alt="Blog Image"
        width={250}
        height={250}
        className="mr-4 rounded-xl"
      ></Image>
      <div className="mt-5 w-[275px] text-white md:mt-0 md:w-[325px]">
        <h6 className="text-[#00f]">Tech</h6>
        <h4 className="my-2.5">{props.title}</h4>
        <h5>{props.desc}</h5>
        <div className="mt-5 flex md:mt-10">
          <Image
            src={changeExtensionFromJPGtoPNG(props.profilePicPath)}
            alt="Blog Profile"
            width={50}
            height={50}
            className="mr-4 rounded-full"
          ></Image>
          <div>
            <h6>{props.author}</h6>
            <h6 className="mt-2 text-[#adb5bd]">{props.date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
