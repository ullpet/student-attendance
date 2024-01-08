import { Injectable } from '@angular/core';

const IS_LOGGED_IN = 'isLoggedIn';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);

    return !!isLoggedIn && !!JSON.parse(isLoggedIn);
  }

  public login(): void {
    localStorage.setItem(IS_LOGGED_IN, JSON.stringify(true));
  }
  public logout(): void {
    localStorage.setItem(IS_LOGGED_IN, JSON.stringify(false));
  }
}
