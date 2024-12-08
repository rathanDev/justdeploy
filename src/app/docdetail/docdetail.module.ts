import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocdetailRoutingModule } from './docdetail-routing.module';
import { DocdetailComponent } from './docdetail.component';


@NgModule({
  declarations: [
    DocdetailComponent
  ],
  imports: [
    CommonModule,
    DocdetailRoutingModule
  ]
})
export class DocdetailModule { }
