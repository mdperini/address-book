import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';

@Component({
  selector: 'app-address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookDetailComponent {
  @Input() addressBookEntry: addressBookSimple = emptyAddressBookEntry;
  emptyAddressBookEntry = emptyAddressBookEntry;

  onClear(): void {
    this.addressBookEntry = emptyAddressBookEntry;
  }
}
