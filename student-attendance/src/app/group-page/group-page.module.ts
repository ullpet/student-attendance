import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageComponent } from './group-page.component';
import { GroupPageRoutingModule } from './group-page-routing.module';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  imports: [CommonModule, GroupPageRoutingModule, TuiButtonModule],
  declarations: [GroupPageComponent],
  exports: [GroupPageComponent],
})
export class GroupPageModule {}
