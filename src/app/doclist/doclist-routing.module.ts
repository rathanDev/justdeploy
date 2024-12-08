import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoclistComponent } from './doclist.component';

const routes: Routes = [{ path: '', component: DoclistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoclistRoutingModule { }
