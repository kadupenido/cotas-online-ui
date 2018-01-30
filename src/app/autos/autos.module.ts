import { AutosService } from './autos.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AutosComponent } from './autos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AutosComponent],
  providers: [
    AutosService
  ]
})
export class AutosModule { }
