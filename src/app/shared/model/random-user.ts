export interface randomUsers {
    results: [randomUser],
    info: string
}


export interface randomUser {
    name: {
        first: string,
        last: string
    },
    phone: string;
    info : {
        seed: string,
        results: number,
        page: number,
        version: string
    }
}

