import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { ACCESS_TOKEN_KEY } from '../constant';
import { RedirectService } from './redirect.service';
import { SharedService } from './shared.service';
import { RegistrationInfo } from '../model/registrationInfo.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  loggedInUser: RegistrationInfo | undefined;

  constructor(
    private sharedService: SharedService,
    private redirector: RedirectService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!accessToken) {
      this.redirector.toLogin();
      return false;
    }
    return true;
  }
}
