import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressBookModule } from './components/address-book/address-book.module';
import { WalkThroughDetailModule } from './components/walk-through/walk-through-detail/walk-through-detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AddressBookModule,
    WalkThroughDetailModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
