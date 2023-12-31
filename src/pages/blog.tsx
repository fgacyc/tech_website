import React, { use, useEffect, useState } from "react";
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
  const [blogs, setBlogs] = useState([]);
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        let res = await getReq("/posts");
        setBlogs(res);
        setSearchedBlogs(res);
      } catch (error) {
        console.error("Error during getBlogs:", error);
      }
    };
    getBlogs();
  }, []);

  const handleSearch = () => {
    const filtered = blogs.filter((blog) => {
      const { title, description, content, author } = blog;
      const searchString =
        `${title} ${description} ${content} ${author}`.toLowerCase();
      return searchString.includes(searchText.toLowerCase());
    });

    setSearchedBlogs(filtered);
  };

  return (
    <div className="min-h-screen bg-[#1d2129] px-12">
      <div className="flex flex-col  py-9 xl:flex-row xl:items-center xl:justify-between">
        <div className="mb-5 text-white xl:mb-0">
          <h1 className="mb-1.5">Blog</h1>
          <h3>Your official source for FGA Tech Research news and updates</h3>
        </div>
        <div className="relative h-12 w-[280px] rounded-xl border border-[#8d8d8d] bg-[#252525] sm:w-[327px]">
          <input
            type="text"
            className="h-12 w-[225px] bg-transparent pl-3 text-white focus:outline-none sm:w-[275px]"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="absolute right-4 top-0 flex h-12 items-center justify-center">
            <img
              src="/icons/blog_search.svg"
              alt="Search Icon"
              className="cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {searchedBlogs.length > 0 ? (
          searchedBlogs.map((blog: Blog, index) => {
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
          })
        ) : (
          <h3 className="text-white">
            No blogs found :&lt;
            <br />
            Search for another keyword...
          </h3>
        )}
      </div>
    </div>
  );
};

export default Blog;
