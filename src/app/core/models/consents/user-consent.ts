import { ConsentInterface } from './consentInterface';

export interface UserConsent {
  name: string;
  email: string;
  consents: ConsentInterface;
}
