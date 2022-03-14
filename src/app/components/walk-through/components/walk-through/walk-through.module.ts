import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RandomUserProvider } from 'src/app/shared/provider/random-user-provider';
import { RandomUserService } from 'src/app/shared/service/random-user-service';
import { WalkThroughContentComponent } from '../walk-through-content/walk-through-content.component';
import { WalkThroughToolbarComponent } from '../walk-through-toolbar/walk-through-toolbar.component';
import { WalkThroughComponent } from './walk-through.component';


const components = [ WalkThroughComponent, WalkThroughContentComponent, WalkThroughToolbarComponent, ];

@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [RandomUserProvider, RandomUserService],
  exports: [...components]
})
export class WalkThroughModule { }
