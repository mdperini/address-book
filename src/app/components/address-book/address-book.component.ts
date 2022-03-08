import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { addressBookData } from 'src/app/shared/data/address-book-data';
import { emptyAddressBookEntry } from 'src/app/shared/data/empty-address-book-entry';
import { addressBookSimple } from 'src/app/shared/model/add-book-summary-simple';
import { ButtonActions } from 'src/app/shared/model/button-actions';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { Subscription  } from 'rxjs';

export const title = 'My Address Book';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class AddressBookComponent implements OnInit, OnDestroy {
  title: string = title;
  addressBookEntries: addressBookSimple[] = addressBookData;
  selectedAddressBookEntry: addressBookSimple = emptyAddressBookEntry;
  emptyAddressBookEntry = emptyAddressBookEntry;
  private subscription: Subscription = new Subscription();

  constructor(private randomUserProvider: RandomUserProvider,
              private randomUserService: RandomUserService,
              private chgDetRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initServices();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initServices(): void  {
    this.subscription = this.randomUserProvider.addressBookObservable.subscribe(data => {
      this.addressBookEntries = data;
      this.chgDetRef.detectChanges();
    });

   this.fetchRandomUsers(ButtonActions.Next); 
  }

  private fetchRandomUsers(buttonAction: ButtonActions): void {
    this.randomUserService.fetchRandomUsers(buttonAction);   
  }

  get totalEntries(): number {
    return this.addressBookEntries ? this.addressBookEntries.length : 0; 
  }

  onClick(newValue: addressBookSimple): void {
   this.selectedAddressBookEntry = newValue;
  }

  onPageRequest(newValue: ButtonActions | any): void {
    this.fetchRandomUsers(newValue)  
  }
}
