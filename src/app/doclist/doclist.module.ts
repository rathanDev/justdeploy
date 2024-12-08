import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoclistRoutingModule } from './doclist-routing.module';
import { DoclistComponent } from './doclist.component';


@NgModule({
  declarations: [
    DoclistComponent
  ],
  imports: [
    CommonModule,
    DoclistRoutingModule
  ]
})
export class DoclistModule { }
