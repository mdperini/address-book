import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/components/address-book/address-book.component';
import { WalkThroughComponent } from './components/walk-through/components/walk-through/walk-through.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
    
  },
  {
    path: 'detail',
    component: WalkThroughComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
