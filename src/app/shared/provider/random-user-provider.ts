import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { randomUsers } from '../model/random-user';
import { addressBookSimple } from '../model/add-book-summary-simple';

@Injectable({ providedIn: 'root'})
export class RandomUserProvider {
   
    constructor(private http: HttpClient) {}

    fetchRandomUsers(pageNumber: number, entriesPerPage: number): Observable<addressBookSimple[]> {
        const url = `https://randomuser.me/api/?page=${pageNumber}&results=${entriesPerPage}&inc=name,phone&seed=abc`;

        return this.http.get<randomUsers>(url).pipe(map( user=> user.results.map( user=> {
            return  {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                    } 
        })));       
    }   
}