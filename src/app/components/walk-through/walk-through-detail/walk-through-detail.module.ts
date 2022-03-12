import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { WalkThroughDetailComponent } from './walk-through-detail.component';


const components = [ WalkThroughDetailComponent ];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [RandomUserProvider, RandomUserService],
  exports: [...components]
})
export class WalkThroughDetailModule { }
