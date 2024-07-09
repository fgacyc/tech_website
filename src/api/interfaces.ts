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
}


export interface ProductsResponse {
    data : Product[]
    status : boolean
    message : string
}