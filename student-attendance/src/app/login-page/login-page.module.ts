import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import {
  TuiAvatarModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    TuiAvatarModule,
    TuiInputPasswordModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiHintModule,
    TuiButtonModule,
    NgOptimizedImage,
  ],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
