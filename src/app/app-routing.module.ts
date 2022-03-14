import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/components/address-book/address-book.component';
import { WalkThroughComponent } from './components/walk-through/components/walk-through/walk-through.component';

const routes: Routes = [
  {
    path: 'address-book',
    component: AddressBookComponent,
    
  },
  {
    path: 'walk-through',
    component: WalkThroughComponent,
    
  },
  { path: '',   redirectTo: '/address-book', pathMatch: 'full' }, 
  { path: 'w',   redirectTo: '/walk-through', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
