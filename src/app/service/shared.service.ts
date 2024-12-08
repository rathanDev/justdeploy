import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegistrationInfo } from '../model/registrationInfo.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private userLoggedInSubject = new BehaviorSubject<boolean>(false);
  private userTypeSubject = new BehaviorSubject<string>('');
  private loggedInUserSubject = new BehaviorSubject<RegistrationInfo>(
    RegistrationInfo.empty()
  );

  userLoggedIn$ = this.userLoggedInSubject.asObservable();
  userType$ = this.userTypeSubject.asObservable();
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor() {}

  setUserLoggedIn(loggedIn: boolean) {
    this.userLoggedInSubject.next(loggedIn);
  }

  setUserType(type: string) {
    this.userTypeSubject.next(type);
  }

  setLoggedInUser(info: RegistrationInfo) {
    this.loggedInUserSubject.next(info);
  }
}
