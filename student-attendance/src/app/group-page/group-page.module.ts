import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageComponent } from './group-page.component';
import { GroupPageRoutingModule } from './group-page-routing.module';

@NgModule({
  imports: [CommonModule, GroupPageRoutingModule],
  declarations: [GroupPageComponent],
  exports: [GroupPageComponent],
})
export class GroupPageModule {}
