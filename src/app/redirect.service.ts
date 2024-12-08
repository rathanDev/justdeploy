import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router) {}

  toLogin() {
    console.log('toLogin');
    this.router.navigate(['/login']);
  }

  toProfile() {
    console.log('toProfile');
    this.router.navigate(['/profile']);
  }

}
