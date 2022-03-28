import { Injectable } from '@angular/core';
import {
  ConsentInterface,
  ConsentType,
  ConsentTypeName,
} from '@core/models/consents/consent-interface';
import { UserConsent } from '@core/models/consents/user-consent';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostConsentDto } from '../models/consents/post-consent-dto';
@Injectable({
  providedIn: 'root',
})
export class ConsentService {
  public postedConsent: UserConsent[] = this.seed();
  private _postedConsent: BehaviorSubject<UserConsent[]> = new BehaviorSubject<
    UserConsent[]
  >(Object.assign([], this.postedConsent));

  public postedConsent$: Observable<UserConsent[]> =
    this._postedConsent.asObservable();

  public getSubscribableConsent(): Array<ConsentInterface> {
    return [
      {
        name: ConsentTypeName.get('newsletter')!,
        value: 'newsletter',
        checked: false,
      },
      { name: ConsentTypeName.get('ads')!, value: 'ads', checked: false },
      {
        name: ConsentTypeName.get('stats')!,
        value: 'stats',
        checked: false,
      },
    ];
  }

  public postConsentList(postConsentDto: PostConsentDto): boolean {
    const userConsent = new UserConsent(
      postConsentDto.username,
      postConsentDto.email,
      this.createConsentsFromConsentType(postConsentDto.consentsType)
    );
    this.postedConsent.push(userConsent);
    this._postedConsent.next(Object.assign([], this.postedConsent));
    return true;
  }

  private createConsentsFromConsentType(consentsType: ConsentType[]): string {
    return consentsType
      .map((type) => {
        return ConsentTypeName.get(type);
      })
      .join(', ');
  }

  private seed(): UserConsent[] {
    const postConsentsDto: PostConsentDto[] = [
      {
        username: 'Hayes Farrell',
        email: 'porttitor@protonmail.net',
        consentsType: ['ads', 'stats'],
      },
      {
        username: 'Reed Battle',
        email: 'non@protonmail.couk',
        consentsType: ['newsletter', 'ads'],
      },
      {
        username: 'Daphne Manning',
        email: 'gravida.non@icloud.couk',
        consentsType: ['ads'],
      },
      {
        username: 'Joshua Robbins',
        email: 'phasellus.nulla.integer@protonmail.ca',
        consentsType: ['newsletter', 'ads', 'stats'],
      },
      {
        username: 'Avram Vincent',
        email: 'placerat.orci.lacus@aol.edu',
        consentsType: ['ads', 'stats'],
      },
    ];
    return postConsentsDto.map((postConsentDto) => {
      return new UserConsent(
        postConsentDto.username,
        postConsentDto.email,
        this.createConsentsFromConsentType(postConsentDto.consentsType)
      );
    });
  }
}
