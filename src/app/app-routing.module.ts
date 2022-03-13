import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './components/address-book/components/address-book/address-book.component';
import { WalkThroughDetailComponent } from './components/walk-through/components/walk-through-detail/walk-through-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddressBookComponent,
    
  },
  {
    path: 'detail',
    component: WalkThroughDetailComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
