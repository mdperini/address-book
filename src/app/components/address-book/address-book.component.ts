import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

export const title = 'My Address Book';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddressBookComponent {
  title: string = title;
  selectedAddressBookEntry: addressBookSimple = emptyAddressBookEntry;
  emptyAddressBookEntry = emptyAddressBookEntry;

  public randomUser$ : Observable<addressBookSimple[]> = this.randomUserService.fetchRandomUsers();
  
  constructor(private randomUserService: RandomUserService) { }

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBookEntry = newValue;
  }

  onPageRequest(newValue: ButtonActions | any): void {
    this.randomUser$ = this.randomUserService.fetchRandomUsers(newValue);
  }
}
