import { Injectable } from '@angular/core';
import { RegistrationInfo } from './model/registrationInfo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private registrationInfoList: RegistrationInfo[] = [];

  public addAccount(info: RegistrationInfo) {
    this.registrationInfoList.push(info);
    console.log('list', this.registrationInfoList);
  }

  public getAccounts() {
    return this.registrationInfoList;
  }
}
