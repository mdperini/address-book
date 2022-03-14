import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { textConst } from '../common/textConst';
import { addressBookSimple } from '../model/add-book-simple';
import { addressBook } from '../model/address-book';
import { ButtonActions } from '../model/button-actions';
import { userCategories } from '../model/user-categories';
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
        this.plusMinusPageNumber(buttonAction)
        return this.randomUserProvider.fetchRandomUsers(this._pageNumber, this._entriesPerPage);   
    }

    fetchRandomUser(buttonAction?: ButtonActions): Observable<addressBook[]> {      
        this.plusMinusPageNumber(buttonAction)
        return this.randomUserProvider.fetchRandomUser(this._pageNumber);   
    }

    private plusMinusPageNumber(buttonAction?: ButtonActions): void {
        if (!buttonAction || buttonAction === ButtonActions.Next) {
            this._pageNumber++;
        } else {
            if (this.pageNumber > 1) {
                this._pageNumber--;
            }                
        }
    }

    getUserCategoryText(selectedCategory: userCategories): string {
        switch (selectedCategory) {
            case userCategories.fullName: 
                return textConst.walkThrough.intro;
            case userCategories.emailAddress:
                return textConst.walkThrough.email;
            case userCategories.dateOfBirth:
                return textConst.walkThrough.birthday;
            case userCategories.location:
                return textConst.walkThrough.address;
            case userCategories.phoneNumber:
                return textConst.walkThrough.phone;
            case userCategories.password:
                return textConst.walkThrough.password;
            case userCategories.nationality:
                return textConst.walkThrough.nationality;
            default:
                return '';
        }        
    }

    getUserContentText(selectedCategory: userCategories, randomPerson: addressBook): string {
        switch (selectedCategory) {
            case userCategories.fullName: 
                return `${randomPerson.firstName} ${randomPerson.lastName}`;
            case userCategories.emailAddress:
                return randomPerson.email;
            case userCategories.dateOfBirth:
                return `${randomPerson.dob}`;
            case userCategories.location:
                return randomPerson.location;
            case userCategories.phoneNumber:
                return randomPerson.phoneNumber;
            case userCategories.password:
                return randomPerson.password;
            case userCategories.nationality:
                return randomPerson.nat;
            default:
                return '';
        }        
    }
}