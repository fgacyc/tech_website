import {BlogResponse, type BlogsResponse} from "~/api/interfaces";




export async function getBlogs(){
    const res = await fetch(`${process.env.API_URL}/tech_website/blogs`)
    const data :BlogsResponse = await res.json() as BlogsResponse
    if(!data.status){
        throw new Error(data.message)
    }
    return data.data
}


export async function getBlog(id:string){
    const res = await fetch(`${process.env.API_URL}/tech_website/blogs/${id}`)
    const data :BlogResponse = await res.json() as BlogResponse
    console.log(data)
    if(!data.status){
        throw new Error(data.message)
    }
    return data.data
}
