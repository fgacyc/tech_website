import React from "react";
import BlogCard from "~/components/blog/BlogCard";

const Blog = () => {
  const blogs = [
    {
      title: "Optimize website performance",
      desc: "In this article, we will introduce some skills and tools to optimize the performance of the website to help you improve the user experience and the ranking of the website.",
      author: "Innis",
      date: "2023-11-18 03:06:45",
      imgPath: "/images/blog/blog_image_1.png",
      profilePicPath: "/images/blog/blog_profile_1.png",
    },
    {
      title: "Optimize website performance",
      desc: "In this article, we will introduce some skills and tools to optimize the performance of the website to help you improve the user experience and the ranking of the website.",
      author: "Innis",
      date: "2023-11-18 03:06:45",
      imgPath: "/images/blog/blog_image_2.png",
      profilePicPath: "/images/blog/blog_profile_2.png",
    },
    {
      title: "Optimize website performance",
      desc: "In this article, we will introduce some skills and tools to optimize the performance of the website to help you improve the user experience and the ranking of the website.",
      author: "Innis",
      date: "2023-11-18 03:06:45",
      imgPath: "/images/blog/blog_image_3.png",
      profilePicPath: "/images/blog/blog_profile_3.png",
    },
    {
      title: "Optimize website performance",
      desc: "In this article, we will introduce some skills and tools to optimize the performance of the website to help you improve the user experience and the ranking of the website.",
      author: "Innis",
      date: "2023-11-18 03:06:45",
      imgPath: "/images/blog/blog_image_4.png",
      profilePicPath: "/images/blog/blog_profile_4.png",
    },
  ];
  return (
    <div className="h-min-screen bg-[#1d2129] px-12">
      <div className="flex flex-col  py-9 xl:flex-row xl:items-center xl:justify-between">
        <div className="mb-5 text-white xl:mb-0">
          <h1 className="mb-1.5">Blog</h1>
          <h3>Your official source for FGA Tech Research news and updates</h3>
        </div>
        <div className="relative h-12 w-[275px] rounded-xl border border-[#8d8d8d] bg-[#252525] sm:w-[327px]">
          <input type="text" className=" bg-transparent focus:outline-none" />
          <div className="absolute right-4 top-0 flex h-12 items-center justify-center">
            <img src="/icons/blog_search.svg" alt="Search Icon" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
              author={blog.author}
              date={blog.date}
              imgPath={blog.imgPath}
              profilePicPath={blog.profilePicPath}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
