import React, { use, useEffect } from "react";
import BlogCard from "~/components/blog/BlogCard";
import { getReq } from "~/api/requests";

type Blog = {
  id: number;
  cover: string;
  title: string;
  description: string;
  content: string;
  author: string;
  avatar: string;
  created_at: string;
  updated_at: string;
};

const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        let res = await getReq("/posts");
        setBlogs(res);
      } catch (error) {
        console.error("Error during getBlogs:", error);
      }
    };
    getBlogs();
  }, []);

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
        {blogs &&
          blogs.map((blog: Blog, index) => {
            return (
              <BlogCard
                key={index}
                title={blog.title}
                desc={blog.description}
                author={blog.author}
                date={blog.updated_at}
                imgPath={blog.cover}
                profilePicPath={blog.avatar}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
