export interface Subscribe {
    message: string;
    status: boolean;
}


export async  function createSubscribe(email: string) : Promise<Subscribe> {
    const response = await fetch(`${process.env.API_URL}/tech_website/subscribe/${email}`, {
        method: 'POST'
    });
    return await response.json() as Subscribe;
}



// `${process.env.API_URL}/tech_website/subscribe`