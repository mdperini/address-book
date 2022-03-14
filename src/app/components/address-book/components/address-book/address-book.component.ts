import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Observable } from 'rxjs';
import { textConst } from 'src/app/shared/common/textConst';
import { emptyAddressBookSimpleEntry } from 'src/app/shared/data/empty-address-book-simple-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-simple';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { RandomUserService } from 'src/app/shared/service/random-user-service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddressBookComponent implements OnInit {
  title: string = '';
  selectedAddressBookEntry: addressBookSimple = emptyAddressBookSimpleEntry;
  emptyAddressBookEntry = emptyAddressBookSimpleEntry;

  public addressBookEntries$ : Observable<addressBookSimple[]> = this.randomUserService.fetchRandomUsers();
  
  constructor(private titleService:Title, 
              private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.title = textConst.addressBook.title;
    this.titleService.setTitle(textConst.addressBook.title);    
  }            

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBookEntry = newValue;
  }

  onPageRequest(newValue: ButtonActions | any): void {
    this.addressBookEntries$ = this.randomUserService.fetchRandomUsers(newValue);
  }
}
