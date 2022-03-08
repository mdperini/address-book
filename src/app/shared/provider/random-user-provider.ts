import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription  } from 'rxjs';
import { randomUser, randomUsers } from '../model/random-user';
import { addressBookSimple } from '../model/add-book-summary-simple';

@Injectable({ providedIn: 'root'})
export class RandomUserProvider implements OnDestroy {
    private addressBookBehavior = new BehaviorSubject<addressBookSimple[]>([]);
    private subscription: Subscription = new Subscription();

    constructor(private http: HttpClient) { }

    public get addressBookObservable() {
        return this.addressBookBehavior.asObservable();
    }

    fetchRandomUsers(pageNumber: number, entriesPerPage: number): void {
        const url = `https://randomuser.me/api/?page=${pageNumber}&results=${entriesPerPage}&inc=name,phone&seed=abc`;
       
        this.subscription = this.http.jsonp(url, 'callback')
            .subscribe(data => {
                const users: randomUsers | any = data;
                const addressBook = users.results.map( (user: randomUser) => {
                    return <addressBookSimple> {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        phoneNumber: user.phone,
                    }                
                });
               this.addressBookBehavior.next(addressBook)
            });       
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}