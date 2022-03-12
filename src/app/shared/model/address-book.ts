import { addressBookSimple } from "./add-book-simple"

export interface addressBook extends addressBookSimple {
    location: string,
    email: string,
    password: string,
    dob: Date,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    nat: string    
}