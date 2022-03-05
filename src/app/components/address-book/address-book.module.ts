import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { AddressBookComponent } from './address-book.component';


@NgModule({
  declarations: [
    AddressBookComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  exports: [AddressBookComponent]
})
export class AddressBookModule { }
