import type {Blog} from "~/api/interfaces";
import {getBlog, getBlogs} from "~/api/blog";
import {type GetStaticPaths, type GetStaticProps} from "next";
import UIHead from "~/components/head";
import React from "react";
import MdViewer from "~/components/md-viewer";



const BlogPage = ({blogData}: { blogData: Blog }) => {
    const {title, content,description} = blogData;
    function  formatDate(date: string) {
       return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function readingTime(content: string) {
        const wordsPerMinute = 200;
        const textLength = content.split(" ").length;
        return Math.ceil(textLength / wordsPerMinute);
    }

    return (
        <div>
            <UIHead title={"FGA TECH - Blog"}/>
            <div className="bg-[#1d2129] text-white mt-[72px] max-w-[800px] mx-auto">
                <div className="flex flex-col  pt-12 text-white sm:px-12 px-6">
                    <h1 className={"mb-4"}>{title}</h1>
                    <h5 className={"text-gray-400"}>{description}</h5>
                </div>
                {/*<SectionHeader*/}
                {/*    title={title}*/}
                {/*    desc={description}*/}
                {/*></SectionHeader>*/}

                <div className="flex justify-between items-center my-6 sm:mx-12 mx-6">
                    <div className={"flex items-center"}>
                        <img src={blogData.avatar} alt={title} className={"w-10 h-10 rounded-full object-cover"}/>
                        <div>
                            <div className="ml-2 text-sm">{blogData.published_by}</div>
                            <div className={"ml-2 text-[12px] text-gray-400"}>{formatDate(blogData.published_at)} - {readingTime(content)} min read</div>
                        </div>
                    </div>

                </div>

                <div className=" flex w-full items-center justify-between sm:px-12 px-6 flex-wrap-reverse ">
                    <MdViewer content={content}/>
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