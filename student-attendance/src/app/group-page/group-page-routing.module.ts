import { RouterModule, Routes } from '@angular/router';
import { GroupPageComponent } from './group-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GroupPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupPageRoutingModule { }
