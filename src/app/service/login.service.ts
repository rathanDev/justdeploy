import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY, LOGIN_URL } from '../constant';
import { DataService } from './data.service';
import { HashService } from './hash.service';
import { RedirectService } from './redirect.service';
import { SharedService } from './shared.service';
import { Token } from '../login/token.model';
import { UserCredentials } from '../login/user-credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private redirector: RedirectService,
    private dataService: DataService,
    private hashService: HashService,
    private sharedService: SharedService
  ) {}

  login(cred: UserCredentials) {
    this.mockLogin(cred);
  }

  private mockLogin(cred: UserCredentials) {
    const hashedPassword = this.hashService.hash(cred.plainPassword);
    const list = this.dataService.getAccounts();
    const accounts = list.filter(
      (a) => a.email === cred.email && a.hashedPassword === hashedPassword
    );
    console.log('acc', accounts);
    if (accounts.length == 0) {
      console.error("No user found");
      return;
    }
    localStorage.setItem(ACCESS_TOKEN_KEY, hashedPassword);
    this.sharedService.setUserLoggedIn(true);
  }

  private doLogin(cred: UserCredentials) {
    const validCred: UserCredentials = {
      email: 'john@mail.com',
      plainPassword: 'changeme',
    };
    this.http.post(LOGIN_URL, validCred).subscribe((data: any) => {
      const token = data as Token;
      const accessToken = token.access_token;
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    });
  }

  logout() {
    console.log('logout');
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.sharedService.setUserLoggedIn(false);
    this.redirector.toHome();
  }
}
