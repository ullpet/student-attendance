import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-student-personal-account',
  templateUrl: './student-personal-account.component.html',
  styleUrl: './student-personal-account.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPersonalAccountComponent {}
