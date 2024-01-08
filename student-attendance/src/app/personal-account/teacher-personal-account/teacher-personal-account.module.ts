import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherPersonalAccountComponent } from './teacher-personal-account.component';
import { TeacherPersonalAccountRoutingModule } from './teacher-personal-account-routing.module';
import '@angular/common/locales/global/ru';
import { GroupListModule } from './group-list/group-list.module';

@NgModule({
  imports: [CommonModule, TeacherPersonalAccountRoutingModule, GroupListModule],
  declarations: [TeacherPersonalAccountComponent],
  exports: [TeacherPersonalAccountComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
})
export class TeacherPersonalAccountModule {}
