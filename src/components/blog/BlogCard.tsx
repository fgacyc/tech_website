import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  desc: string;
  author: string;
  date: string;
  imgPath: string;
  profilePicPath: string;
  category: string;
}

const BlogCard = (props: BlogCardProps) => {

  return (
    <div className="md:mb-28  sm:w-auto w-full min-w-[320px] border-1 rounded-xl border-gray-100">
      <img
        src={props.imgPath}
        alt="Blog Image"
        className="mr-4 rounded-t-xl w-full h-[250px] cursor-pointer object-cover "
      ></img>
      <div className="mt-5 text-white md:mt-0 p-4">
        <span className="text-gray-600 bg-[rgb(229,231,235)] py-1 px-2 leading-[30px] rounded">{props.category}</span>
        <h4 className="my-2.5 font-bold h-[60px] cursor-pointer text-[20px]">{props.title}</h4>
        <h5 className={"line-clamp-5"}>{props.desc}</h5>

        <div className="mt-5 flex  items-center">
          <img
              src={props.profilePicPath}
              alt="Blog Profile"
              className="mr-4 rounded-full w-12 h-12"
          ></img>

          <div className="text-sm text-[#6e6e73]">
            <span className="font-medium">{props.author}</span> · {convertToEastEightZone(props.date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


function convertToEastEightZone(utcDateStr: string): string {
  const utcDate = new Date(utcDateStr);
  // const utcTime = utcDate.getTime();
  // const eastEightTime = utcTime + 8 * 60 * 60 * 1000; // 东八区偏移为 8 小时
  // const eastEightDate =utcTime
  const year = utcDate.getFullYear();
  const month = String(utcDate.getMonth() + 1).padStart(2, '0');
  const day = String(utcDate.getDate()).padStart(2, '0');
  const hours = String(utcDate.getHours()).padStart(2, '0');
  const minutes = String(utcDate.getMinutes()).padStart(2, '0');
  const seconds = String(utcDate.getSeconds()).padStart(2, '0');
  // const milliseconds = String(utcDate.getMilliseconds()).padStart(3, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}