import { RouterModule, Routes } from '@angular/router';
import { StudentPersonalAccountComponent } from './student-personal-account.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: StudentPersonalAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPersonalAccountRoutingModule { }
