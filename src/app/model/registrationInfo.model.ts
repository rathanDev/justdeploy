export class RegistrationInfo {
  type: string; // Doc, Pat

  name: string;
  email: string;
  plainPassword: string;
  hashedPassword: string;
  address: string;
  dob: Date;

  constructor(
    t: string,
    n: string,
    e: string,
    pp: string,
    hp: string,
    a: string,
    d: Date
  ) {
    this.type = t;

    this.name = n;
    this.email = e;
    this.plainPassword = pp;
    this.hashedPassword = hp;
    this.address = a;
    this.dob = d;
  }

  static empty() {
    return new RegistrationInfo('', '', '', '', '', '', new Date());
  }
}
