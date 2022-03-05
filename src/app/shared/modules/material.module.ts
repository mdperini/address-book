import {NgModule} from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [MatListModule, MatButtonModule, MatCardModule] 
})
export class MaterialModule {}