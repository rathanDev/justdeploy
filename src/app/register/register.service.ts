import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REGISTER_URL } from '../constant';
import { RedirectService } from '../redirect.service';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient, private redirector: RedirectService) {}

  register(info: Register) {
    this.mockRegister(info);
  }

  private mockRegister(info: Register) {
    console.log('mockRegister', info);
    this.redirector.toLogin();
  }

  private doRegister(info: Register) {
    this.http.post(REGISTER_URL, info).subscribe((data: any) => {
      console.log('res', data);
    });
  }
}
