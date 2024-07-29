export  interface Member {
    id : number
    name : string
    picture : string
    role : string
    url : string
}

export interface MembersResponse {
    data : Member[]
    status : boolean
    message : string
}

export  interface Product {
    id : number
    name : string
    description : string
    picture : string
    url : string
    launch_at : string,
    contributors : Member[]
}


export interface ProductsResponse {
    data : Product[]
    status : boolean
    message : string
}

export  interface  Blog {
    id : number
    title : string
    description : string
    picture : string
    category : string
    published_at : string
    avatar : string
    content : string
    published_by : string
}

export interface BlogsResponse {
    data : Blog[]
    status : boolean
    message : string
}
export interface BlogResponse {
    data : Blog
    status : boolean
    message : string
}