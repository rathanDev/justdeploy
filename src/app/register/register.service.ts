import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REGISTER_URL } from '../constant';
import { DataService } from '../data.service';
import { RegistrationInfo } from '../model/registrationInfo.model';
import { RedirectService } from '../redirect.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private redirector: RedirectService,
    private dataService: DataService
  ) {}

  register(info: RegistrationInfo) {
    this.mockRegister(info);
  }

  private mockRegister(info: RegistrationInfo) {
    console.log('mockRegister', info);
    this.dataService.addAccount(info);
    this.redirector.toLogin();
  }

  private doRegister(info: RegistrationInfo) {
    this.http.post(REGISTER_URL, info).subscribe((data: any) => {
      console.log('res', data);
    });
  }
}
