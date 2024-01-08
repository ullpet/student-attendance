import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { TuiBadgeModule, TuiFilterByInputPipeModule, TuiFilterModule, TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  imports: [CommonModule, TuiFilterModule, ReactiveFormsModule, TuiInputModule, TuiTextfieldControllerModule, TuiBadgeModule, TuiSvgModule, TuiFilterByInputPipeModule],
  declarations: [GroupListComponent],
  exports: [GroupListComponent],
})
export class GroupListModule {}
