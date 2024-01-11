import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'teacher',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-page/login-page.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './personal-account/student-personal-account/student-personal-account.module'
      ).then((m) => m.StudentPersonalAccountModule),
  },
  {
    path: 'teacher',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        './personal-account/teacher-personal-account/teacher-personal-account.module'
      ).then((m) => m.TeacherPersonalAccountModule),
  },
  {
    path: 'group/:groupNumber',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./group-page/group-page.module').then((m) => m.GroupPageModule),
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
