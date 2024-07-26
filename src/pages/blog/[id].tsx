import type {Blog} from "~/api/interfaces";
import {getBlog, getBlogs} from "~/api/blog";
import {type GetStaticPaths, type GetStaticProps} from "next";
import UIHead from "~/components/head";
import SectionHeader from "~/components/SectionHeader";
import React from "react";
import MdViewer from "~/components/md-viewer";



const BlogPage = ({blogData}: { blogData: Blog }) => {
    const {title, content,description} = blogData;
    return (
        <div>
            <UIHead title={"FGA TECH - Blog"}/>
            <div className="bg-[#1d2129] text-white mt-[72px]">
                <SectionHeader
                    title={title}
                    desc={description}
                ></SectionHeader>

                <div className=" flex w-full items-center justify-between sm:px-12 px-6 flex-wrap-reverse">
                    <MdViewer content={content} />
                </div>
            </div>
        </div>
    );
};
export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
    // 这里你需要返回所有的博客 id
    const blogs = await getBlogs(); // 假设你有一个方法来获取所有博客
    const paths = blogs.map(blog => ({
        params: {id: blog.id.toString()},
    }));
    return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params!;
    if (typeof id !== 'string') {
        throw new Error('Invalid id');
    }
    const blogData: Blog = await getBlog(id);
    return {
        props: {
            blogData,
        },
        revalidate: 60,
    };
};