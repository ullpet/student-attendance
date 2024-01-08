import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrl: './group-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPageComponent {}
