import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalkThroughModule } from './components/walk-through/components/walk-through/walk-through.module';
import { AddressBookModule } from './components/address-book/components/address-book/address-book.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AddressBookModule,
    WalkThroughModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
