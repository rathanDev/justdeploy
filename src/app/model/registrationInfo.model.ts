export class RegistrationInfo {
  type: string; // Doc, Pat

  name: string;
  email: string;
  password: string;
  address: string;
  dob: Date;

  constructor(t: string, n: string, e: string, p: string, a: string, d: Date) {
    this.type = t;

    this.name = n;
    this.email = e;
    this.password = p;
    this.address = a;
    this.dob = d;
  }
}
