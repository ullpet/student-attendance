import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-teacher-personal-account',
  templateUrl: './teacher-personal-account.component.html',
  styleUrl: './teacher-personal-account.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherPersonalAccountComponent {
  public currentDate = new Date();
}
