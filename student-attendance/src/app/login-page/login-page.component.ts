import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { availableUsers } from './available-users';
import { User } from './user';
import { TuiAlertService } from '@taiga-ui/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public loginControl = new FormControl('', Validators.required);
  public passwordControl = new FormControl('', Validators.required);

  public get isFormInvalid(): boolean {
    return this.loginControl.invalid || this.passwordControl.invalid;
  }

  public get isFormTouched(): boolean {
    return this.loginControl.touched && this.passwordControl.touched;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly alertService: TuiAlertService,
    private readonly router: Router
  ) {}

  public login(): void {
    if (this.canLogin()) {
      this.authService.login();
      this.navigateToPersonalAccount();

      return;
    }

    this.alertService
      .open('Неверный логин или пароль', {
        label: 'Не удалось войти в систему',
        status: 'error',
      })
      .subscribe();
  }

  private canLogin(): boolean {
    return availableUsers.some(
      (user: User) =>
        user.login === this.loginControl.value &&
        user.password === this.passwordControl.value
    );
  }

  private navigateToPersonalAccount(): void {
    this.loginControl.value === 'student'
      ? this.router.navigate(['/student'])
      : this.router.navigate(['/teacher']);
  }
}
