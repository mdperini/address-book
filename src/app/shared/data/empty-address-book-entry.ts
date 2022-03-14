
import { addressBook } from "../model/address-book";

export const emptyAddressBookEntry: addressBook = {    
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    email: '',
    password: '',
    dob: new Date(),
    picture: {
        large: '',
        medium: '',
        thumbnail: ''
    },
    nat: ''
};