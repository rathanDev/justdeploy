import { Injectable } from '@angular/core';
import { DateRange } from '../model/dateRange.model';
import { RegistrationInfo } from '../model/registrationInfo.model';
import { HashService } from './hash.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private registrationInfoList: RegistrationInfo[] = [];
  private docAvailability: Map<string, DateRange[]> = new Map();

  constructor(private hashService: HashService) {
    this.initUserAccounts();
  }

  initUserAccounts() {
    console.log('initAccounts');

    const pp1 = 'ppp';
    const hp1 = this.hashService.hash(pp1);
    const patUser1: RegistrationInfo = {
      type: 'pat',
      name: 'p',
      email: 'p',
      plainPassword: '',
      hashedPassword: hp1,
      address: 'a',
      dob: new Date(),
    };
    this.addUserAccount(patUser1);

    const pp2 = 'ddd';
    const hp2 = this.hashService.hash(pp2);
    const docUser1: RegistrationInfo = {
      type: 'doc',
      name: 'd',
      email: 'd',
      plainPassword: '',
      hashedPassword: hp2,
      address: 'd',
      dob: new Date(),
    };
    this.addUserAccount(docUser1);
  }

  public addUserAccount(info: RegistrationInfo) {
    console.log('info', info);
    this.registrationInfoList.push(info);
    console.log('list', this.registrationInfoList);
  }

  public getAccounts() {
    return this.registrationInfoList;
  }

  public addDocAv(docName: string, ranges: DateRange[]) {
    this.docAvailability.set(docName, ranges);
  }
}
