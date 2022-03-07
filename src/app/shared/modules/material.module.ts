import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [MatListModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatIconModule] 
})
export class MaterialModule {}