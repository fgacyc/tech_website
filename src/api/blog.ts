import { type BlogsResponse} from "~/api/interfaces";




export async function getBlogs(){
    const res = await fetch(`${process.env.API_URL}/tech_website/blogs`)
    const data :BlogsResponse = await res.json() as BlogsResponse
    if(!data.status){
        throw new Error(data.message)
    }
    return data.data
}


