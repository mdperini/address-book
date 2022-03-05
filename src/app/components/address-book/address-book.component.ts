import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBook } from 'src/app/shared/data/empty-address-book';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddressBookComponent implements OnInit {
  addressBookEntries: addressBookSimple[] = addressBookData;
  selectedAddressBook: addressBookSimple = emptyAddressBook;
  emptyAddressBook = emptyAddressBook;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBook = newValue;
  }

  onClear(): void {
    this.selectedAddressBook = emptyAddressBook;
  }

}
