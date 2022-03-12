import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { randomUsers, randomUsersSimple } from '../model/random-user';
import { addressBookSimple } from '../model/add-book-simple';
import { addressBook } from '../model/address-book';

@Injectable({ providedIn: 'root'})
export class RandomUserProvider {
   
    constructor(private http: HttpClient) {}

    fetchRandomUsers(pageNumber: number, entriesPerPage: number): Observable<addressBookSimple[]> {
        const url = `https://randomuser.me/api/?page=${pageNumber}&results=${entriesPerPage}&inc=name,phone&seed=abc`;

        return this.http.get<randomUsersSimple>(url).pipe(map( user=> user.results.map( user=> {
            return  {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                    } 
        })));       
    }  
    
    fetchRandomUser(pageNumber: number): Observable<addressBook[]> {
        const url = `https://randomuser.me/api/?page=${pageNumber}&results=1&inc=name,location,email,login,dob,phone,picture,nat&seed=abc`;

        return this.http.get<randomUsers>(url).pipe(map( user=> user.results.map( user=> {
            console.log(`${JSON.stringify(user)}`);
            return  {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                        location: `${user.location.street.number} ${user.location.street.name}`,
                        email: user.email,
                        password: user.login.password,
                        dob: user.dob.date,
                        picture: {
                            large: user.picture.large,
                            medium: user.picture.medium,
                            thumbnail: user.picture.thumbnail
                        },
                        nat: user.nat    
                    } 
        })));       
    }   
}