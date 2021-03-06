import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { emptyAddressBookSimpleEntry } from 'src/app/shared/data/empty-address-book-simple-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-simple';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrls: ['./fullname.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullnameComponent {

 @Input() addressBookEntry: addressBookSimple = emptyAddressBookSimpleEntry;

}
