import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription  } from 'rxjs';
import { randomUsers } from '../model/random-user';
import { addressBookSimple } from '../model/add-book-summary-simple';

@Injectable({ providedIn: 'root'})
export class RandomUserProvider implements OnDestroy {

    addressBook: addressBookSimple[] = [];
    addressBookBehavor = new BehaviorSubject<addressBookSimple[]>(this.addressBook);
    subscription: Subscription = new Subscription();


    constructor(private http: HttpClient) { }

    fetchRandomUsers(): void {
        const url = 'https://randomuser.me/api/?results=10';
        this.subscription = this.http.jsonp(url, 'callback')
        .subscribe(data => {
            const users: randomUsers | any = data;
            this.addressBook = users.results.map( (user: { name: { first: any; last: any; }; phone: any; }) => {
                return <addressBookSimple> {
                    firstName: user.name.first,
                    lastName: user.name.last,
                    phoneNumber: user.phone,
                }                
            });
            this.addressBookBehavor.next(this.addressBook)
        });       
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}