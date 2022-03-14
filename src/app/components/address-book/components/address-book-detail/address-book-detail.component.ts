import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy  } from '@angular/core';
import { emptyAddressBookSimpleEntry } from 'src/app/shared/data/empty-address-book-simple-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-simple';

@Component({
  selector: 'app-address-book-detail',
  templateUrl: './address-book-detail.component.html',
  styleUrls: ['./address-book-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressBookDetailComponent {
  @Input() addressBookEntry: addressBookSimple = emptyAddressBookSimpleEntry;
  emptyAddressBookEntry = emptyAddressBookSimpleEntry;

  onClear(): void {
    this.addressBookEntry = emptyAddressBookSimpleEntry;
  }
}
