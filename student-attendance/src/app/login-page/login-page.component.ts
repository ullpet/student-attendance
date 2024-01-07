import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  public logoUrl = '../../assets/rea-logo.png';
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}
