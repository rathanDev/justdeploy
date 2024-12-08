import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY, LOGIN_URL } from '../constant';
import { RedirectService } from '../redirect.service';
import { Token } from './token';
import { UserCredentials } from './user-credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private redirector: RedirectService) {}

  login(cred: UserCredentials) {
    const validCred: UserCredentials = {
      email: 'john@mail.com',
      password: 'changeme',
    };
    this.http.post(LOGIN_URL, validCred).subscribe((data: any) => {
      const token = data as Token;
      const accessToken = token.access_token;
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    });
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.redirector.toHome();
  }
}
