import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocdetailComponent } from './docdetail.component';

const routes: Routes = [{ path: '', component: DocdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocdetailRoutingModule { }
