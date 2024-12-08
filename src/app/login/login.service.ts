import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY, LOGIN_URL } from '../constant';
import { DataService } from '../data.service';
import { HashService } from '../hash.service';
import { RedirectService } from '../redirect.service';
import { Token } from './token.model';
import { UserCredentials } from './user-credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private redirector: RedirectService,
    private dataService: DataService,
    private hashService: HashService
  ) {}

  login(cred: UserCredentials) {
    this.mockLogin(cred);
  }

  private mockLogin(cred: UserCredentials) {
    const hashedPassword = this.hashService.hash(cred.password);
    const list = this.dataService.getAccounts();
    const account = list.filter(
      (a) => a.email === cred.email && a.password === hashedPassword
    );
    console.log('acc', account);
    localStorage.setItem(ACCESS_TOKEN_KEY, hashedPassword);
  }

  private doLogin(cred: UserCredentials) {
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
