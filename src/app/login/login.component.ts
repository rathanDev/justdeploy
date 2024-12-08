import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from '../service/login.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loggedIn: boolean = false;
  loginSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private sharedService: SharedService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      plainPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.loginSubscription = this.sharedService.userLoggedIn$.subscribe(
      (loggedIn) => (this.loggedIn = loggedIn)
    );
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  onSubmit() {
    const cred = this.loginForm.value;
    console.log('cred', cred);
    this.loginService.login(cred);
  }

  logout() {
    this.loginService.logout();
  }
}
