import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import {
  TuiBadgeModule, TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiFilterModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

@NgModule({
  imports: [
    CommonModule,
    TuiFilterModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiBadgeModule,
    TuiSvgModule,
    TuiFilterByInputPipeModule,
    TuiDataListWrapperModule,
    TuiBlockStatusModule,
  ],
  declarations: [GroupListComponent],
  exports: [GroupListComponent],
})
export class GroupListModule {}
