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
}

