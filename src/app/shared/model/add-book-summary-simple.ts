export interface addressBookSimple {
    firstName: string,
    lastName: string,
    phoneNumber: string
}

export interface addressBook extends addressBookSimple {
    location: string,
    email: string,
    login: string,
    dob: string,
    picture: string,
    nat: string    
}