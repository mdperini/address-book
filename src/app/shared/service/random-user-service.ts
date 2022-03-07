import { Injectable } from '@angular/core';
import { ButtonActions } from '../model/button-actions';
import { RandomUserProvider } from '../provider/random-user-provider';

const defaultEntriesPerPage = 10;

@Injectable({ providedIn: 'root'})
export class RandomUserService {
    private _entriesPerPage: number = defaultEntriesPerPage
      private _pageNumber: number = 0;
  
    constructor(private randomUserProvider: RandomUserProvider) { }

    public set entriesPerPage(theEntriesPerPage: number) {
        this._entriesPerPage = theEntriesPerPage;
    }

    public get entriesPerPage() {
        return this._entriesPerPage;
    }

    public get pageNumber() {
        return this._pageNumber;
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