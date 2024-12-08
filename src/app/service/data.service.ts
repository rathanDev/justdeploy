import { Injectable } from '@angular/core';
import { RegistrationInfo } from '../model/registrationInfo.model';
import { HashService } from './hash.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private registrationInfoList: RegistrationInfo[] = [];

  constructor(private hashService: HashService) {
    this.initAccounts();
  }

  initAccounts() {
    console.log('initAccounts');
    const plainPassword = 'aaa';
    const hashedPassword = this.hashService.hash(plainPassword);
    const info: RegistrationInfo = {
      type: 'pat',
      name: 'a',
      email: 'a',
      plainPassword: plainPassword,
      hashedPassword: hashedPassword,
      address: 'a',
      dob: new Date(),
    };
    this.addAccount(info);
  }

  public addAccount(info: RegistrationInfo) {
    this.registrationInfoList.push(info);
    console.log('list', this.registrationInfoList);
  }

  public getAccounts() {
    return this.registrationInfoList;
  }
}
