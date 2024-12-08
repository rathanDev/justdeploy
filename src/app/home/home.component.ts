import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../service/login.service';
import { SharedService } from '../service/shared.service';
import { ACCESS_TOKEN_KEY } from '../constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedIn: boolean = false;
  private loginSubscription: Subscription | undefined;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.loginSubscription = this.sharedService.userLoggedIn$.subscribe(
      (loggedIn) => {
        this.loggedIn = loggedIn;
        console.log('loggedIn', this.loggedIn);
      }
    );
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
