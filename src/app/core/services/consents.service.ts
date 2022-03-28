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
  public usersConsents: UserConsent[] = this.seed();
  private _usersConsents: BehaviorSubject<UserConsent[]> = new BehaviorSubject<
    UserConsent[]
  >(Object.assign([], this.usersConsents));

  private usersConsents$: Observable<UserConsent[]> =
    this._usersConsents.asObservable();

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

  public getUsersConsents(): Observable<UserConsent[]> {
    return this.usersConsents$;
  }

  public postUserConsents(postConsentDto: PostConsentDto): boolean {
    const userConsent = new UserConsent(
      postConsentDto.username,
      postConsentDto.email,
      this.createConsentsFromConsentType(postConsentDto.consentsType)
    );
    this.usersConsents.push(userConsent);
    this._usersConsents.next(Object.assign([], this.usersConsents));
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
