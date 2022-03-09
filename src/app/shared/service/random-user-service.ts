import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { addressBookSimple } from '../model/add-book-summary-simple';
import { ButtonActions } from '../model/button-actions';
import { RandomUserProvider } from '../provider/random-user-provider';

export const defaultEntriesPerPage = 10;

@Injectable({ providedIn: 'root'})
export class RandomUserService {
    private _entriesPerPage: number = defaultEntriesPerPage
    private _pageNumber: number = 0;
  
    constructor(private randomUserProvider: RandomUserProvider) {
        // const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
        // switched.subscribe(x => console.log(x));
     }

    public set entriesPerPage(theEntriesPerPage: number) {
        this._entriesPerPage = theEntriesPerPage;
    }

    public get entriesPerPage() {
        return this._entriesPerPage;
    }

    public get pageNumber() {
        return this._pageNumber;
    }

    fetchRandomUsers(buttonAction?: ButtonActions): Observable<addressBookSimple[]> {      
        const action = buttonAction ? buttonAction : ButtonActions.Next;

        switch(action) {
            case ButtonActions.Next:
                this._pageNumber++;
                break;

            case ButtonActions.Previous:
                if (this.pageNumber > 1) {
                    this._pageNumber--;
                }                
                break;
        }
        
       return this.randomUserProvider.fetchRandomUsers(this._pageNumber, this._entriesPerPage);   
    }
}