export interface randomUsersSimple {
    results: randomUserSimple[],
    info: string
}

export interface randomUserSimple {
    name: {
        first: string,
        last: string
    },
    phone: string;   
}


export interface randomUsers {
    results: randomUser[],
    info: string
}

export interface randomUser extends  randomUserSimple{
    location: {
        street: {
            number: number,
            name: string
        }
    },
    email: string;
    login: {
        password: string;       
    },
    dob:  {
        date: Date;       
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
    nat: string;
}

