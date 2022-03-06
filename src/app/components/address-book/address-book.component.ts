import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddressBookComponent implements OnInit {
  userName: string = 'Michael Perini';
  addressBookEntries: addressBookSimple[] = addressBookData;
  selectedAddressBookEntry: addressBookSimple = emptyAddressBookEntry;
  emptyAddressBookEntry = emptyAddressBookEntry;

  constructor(private randomUserService: RandomUserService,
              private randomUserProvider: RandomUserProvider,
              private chgDetRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.randomUserProvider.addressBookBehavor.subscribe(data => {
      this.addressBookEntries = data;
      this.chgDetRef.detectChanges();
    });
    
    this.randomUserService.fetchRandomUsers();    
  }

  get totalEntries(): number {
    return this.addressBookEntries ? this.addressBookEntries.length : 0; 
  }

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBookEntry = newValue;
  }
}
