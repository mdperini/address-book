import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addressBookSimple } from '../model/add-book-summary-simple';
import { ButtonActions } from '../model/button-actions';
import { RandomUserProvider } from '../provider/random-user-provider';

export const defaultEntriesPerPage = 10;

@Injectable({ providedIn: 'root'})
export class RandomUserService {
    private _entriesPerPage: number = defaultEntriesPerPage
    private _pageNumber: number = 0;
  
    constructor(private randomUserProvider: RandomUserProvider) {}

    public get entriesPerPage() { return this._entriesPerPage; }

    public get pageNumber() { return this._pageNumber; }

    fetchRandomUsers(buttonAction?: ButtonActions): Observable<addressBookSimple[]> {      
        if (!buttonAction || buttonAction === ButtonActions.Next) {
            this._pageNumber++;
        } else {
            if (this.pageNumber > 1) {
                this._pageNumber--;
            }                
        }

       return this.randomUserProvider.fetchRandomUsers(this._pageNumber, this._entriesPerPage);   
    }
}