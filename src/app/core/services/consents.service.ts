import { Injectable } from '@angular/core';
import { ConsentInterface } from '@core/models/consents/consentInterface';
import { UserConsent } from '@core/models/consents/user-consent';
@Injectable()
export class ConsentService {
  public postedConsent: Array<UserConsent> = [];

  public getConsentList(): Array<ConsentInterface> {
    return [
      { name: 'Receive newsletter', value: 'newsletter', checked: false },
      { name: 'Be shown targeted ads', value: 'ads', checked: false },
      {
        name: 'Contribute to anonymous visit statistics',
        value: 'stats',
        checked: false,
      },
    ];
  }

  public postConsentList(userConsent: UserConsent): void {
    this.postedConsent.push(userConsent);
  }

  public getPostedConsent(): Array<UserConsent> {
    return this.postedConsent;
  }
}
