import { ConsentType } from './consent-interface';

export interface PostConsentDto {
  username: string;
  email: string;
  consentsType: ConsentType[];
}
