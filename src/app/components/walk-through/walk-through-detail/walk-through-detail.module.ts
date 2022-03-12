import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { WalkThroughDetailComponent } from './walk-through-detail.component';


const components = [ WalkThroughDetailComponent ];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule
  ],
  providers: [RandomUserProvider, RandomUserService],
  exports: [...components]
})
export class WalkThroughDetailModule { }
