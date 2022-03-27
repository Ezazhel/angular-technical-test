import { Injectable } from '@angular/core';
import { ConsentInterface } from '@core/models/consents/consent-interface';
import { UserConsent } from '@core/models/consents/user-consent';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  private _postedConsent: BehaviorSubject<UserConsent[]> = new BehaviorSubject<
    UserConsent[]
  >([]);

  public postedConsent$: Observable<UserConsent[]> =
    this._postedConsent.asObservable();
  public postedConsent: UserConsent[] = [];

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

  public postConsentList(userConsent: UserConsent): boolean {
    this.postedConsent.push(userConsent);
    this._postedConsent.next(Object.assign([], this.postedConsent));
    return true;
  }
}
