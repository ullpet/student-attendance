import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPersonalAccountComponent } from './student-personal-account.component';
import { StudentPersonalAccountRoutingModule } from './student-personal-account-routing.module';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

@NgModule({
  imports: [CommonModule, StudentPersonalAccountRoutingModule, TuiBlockStatusModule, TuiMarkerIconModule],
  declarations: [StudentPersonalAccountComponent],
  exports: [StudentPersonalAccountComponent],
})
export class StudentPersonalAccountModule {}
