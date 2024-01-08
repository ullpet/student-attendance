import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPersonalAccountComponent } from './student-personal-account.component';
import { StudentPersonalAccountRoutingModule } from './student-personal-account-routing.module';

@NgModule({
  imports: [CommonModule, StudentPersonalAccountRoutingModule],
  declarations: [StudentPersonalAccountComponent],
  exports: [StudentPersonalAccountComponent],
})
export class StudentPersonalAccountModule {}
