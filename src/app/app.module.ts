import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalkThroughDetailModule } from './components/walk-through/components/walk-through-detail/walk-through-detail.module';
import { AddressBookModule } from './components/address-book/components/address-book/address-book.module';
import { WalkThroughContentComponent } from './components/walk-through/components/walk-through-content/walk-through-content.component';

@NgModule({
  declarations: [
    AppComponent,
    WalkThroughContentComponent,
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
