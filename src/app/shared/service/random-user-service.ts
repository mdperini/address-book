import { Injectable } from '@angular/core';
import { ButtonActions } from '../model/button-actions';
import { RandomUserProvider } from '../provider/random-user-provider';

const defaultEntriesPerPage = 10;


@Injectable({ providedIn: 'root'})
export class RandomUserService {
    private _pageNumber: number = 0;
    private _entriesPerPage: number = defaultEntriesPerPage

    constructor(private randomUserProvider: RandomUserProvider) { }

    public get pageNumber() {
        return this._pageNumber;
    }

    public set entriesPerPage(theEntriesPerPage: number) {
        if (theEntriesPerPage <= 0 || theEntriesPerPage >= 100) {
            throw new Error('The age is invalid');
        }
        this._entriesPerPage = theEntriesPerPage;
    }

    public get entriesPerPage() {
        return this._entriesPerPage;
    }


    fetchRandomUsers(buttonAction: ButtonActions): void {      
        switch(buttonAction) {
            case ButtonActions.Next:
                this._pageNumber++;
                break;

            case ButtonActions.Previous:
                if (this.pageNumber > 1) {
                    this._pageNumber--;
                }                
                break;
        }
        
        this.randomUserProvider.fetchRandomUsers(this._pageNumber, this._entriesPerPage);   
    }
}