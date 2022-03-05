import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';

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

  constructor() { }

  ngOnInit(): void {
  }

  get totalEntries(): number {
    return this.addressBookEntries ? this.addressBookEntries.length : 0; 
  }

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBookEntry = newValue;
  }
}
