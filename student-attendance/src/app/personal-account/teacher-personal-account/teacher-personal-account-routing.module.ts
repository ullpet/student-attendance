import { RouterModule, Routes } from '@angular/router';
import { TeacherPersonalAccountComponent } from './teacher-personal-account.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TeacherPersonalAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherPersonalAccountRoutingModule { }
