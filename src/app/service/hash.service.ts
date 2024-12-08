import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class HashService {
  private salt = 'beta';

  constructor() {}

  hash(str: string) {
    const salted = str + this.salt;
    const hashedVal = CryptoJs.SHA512(salted).toString(CryptoJs.enc.Hex);
    console.log('hash', hashedVal);
    return hashedVal;
  }

  match(str: string, actualHashedVal: string) {
    const salted = str + this.salt;
    const expectedHashedVal = CryptoJs.SHA512(salted).toString(
      CryptoJs.enc.Hex
    );
    return expectedHashedVal == actualHashedVal;
  }
}
