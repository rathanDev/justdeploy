export class UserCredentials {
  email: string;
  plainPassword: string;

  constructor(e: string, p: string) {
    this.email = e;
    this.plainPassword = p;
  }
}
