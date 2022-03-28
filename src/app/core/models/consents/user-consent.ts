export class UserConsent {
  name: string;
  email: string;
  consents: string;

  constructor(name: string, email: string, consents: string) {
    this.name = name;
    this.email = email;
    this.consents = consents;
  }
}
