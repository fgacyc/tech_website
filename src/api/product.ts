import {type ProductsResponse} from "~/api/interfaces";


export async function getProducts(){
    const res = await fetch(`${process.env.API_URL}/tech_website/products`)
    const data :ProductsResponse = await res.json() as ProductsResponse
    if(!data.status){
        throw new Error(data.message)
    }
    // console.log(data.data)
    return data.data
}


