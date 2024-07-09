import { type MembersResponse} from "~/api/interfaces";




export async function getTeams(){
    const res = await fetch(`${process.env.API_URL}/tech_website/members`)
    const data :MembersResponse = await res.json() as MembersResponse
    if(!data.status){
        throw new Error(data.message)
    }
    return data.data
}


