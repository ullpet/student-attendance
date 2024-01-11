import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-personal-account',
  templateUrl: './teacher-personal-account.component.html',
  styleUrl: './teacher-personal-account.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherPersonalAccountComponent {
  public currentDate = new Date();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
