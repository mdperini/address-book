import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { AddressBookDetailComponent } from '../address-book-detail/address-book-detail.component';
import { AddressBookFooterComponent } from '../address-book-footer/address-book-footer.component';
import { AddressBookHeaderComponent } from '../address-book-header/address-book-header.component';
import { FullnameComponent } from '../fullname/fullname.component';
import { AddressBookComponent } from './address-book.component';

const components = [ AddressBookComponent, 
  FullnameComponent, 
  AddressBookDetailComponent,
  AddressBookHeaderComponent,
  AddressBookFooterComponent];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [RandomUserProvider, RandomUserService],
  exports: [...components]
})
export class AddressBookModule { }
