import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddressBookModule } from 'src/app/components/address-book/components/address-book/address-book.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { WalkThroughContentComponent } from '../walk-through-content/walk-through-content.component';
import { WalkThroughHeaderComponent } from '../walk-through-header/walk-through-header.component';
import { WalkThroughToolbarComponent } from '../walk-through-toolbar/walk-through-toolbar.component';
import { WalkThroughComponent } from './walk-through.component';


const components = [ WalkThroughComponent, WalkThroughContentComponent, WalkThroughToolbarComponent, WalkThroughHeaderComponent ];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    MaterialModule,
    AddressBookModule
  ],
  providers: [RandomUserProvider, RandomUserService],
  exports: [...components]
})
export class WalkThroughModule { }
