import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { UserConsent } from '../../core/models/consents/user-consent';
import { ConsentService } from '../../core/services/consents.service';
import { SharedModule } from '../../shared/shared.module';

import { ConsentsComponent } from './consents.component';

describe('ConsentsComponent', () => {
  let fakeConsentService: Pick<ConsentService, 'getUserConsents'>;
  let component: ConsentsComponent;
  let fixture: ComponentFixture<ConsentsComponent>;
  let postedConsent$: BehaviorSubject<UserConsent[]>;
  beforeEach(async () => {
    postedConsent$ = new BehaviorSubject<UserConsent[]>([
      {
        name: 'name',
        email: 'test@test.com',
        consents: 'test, test 2',
      },
    ]);
    fakeConsentService = jasmine.createSpyObj('ConsentService', {
      getUserConsents: postedConsent$,
    });

    await TestBed.configureTestingModule({
      declarations: [ConsentsComponent],
      providers: [
        SharedModule,
        {
          provide: ConsentService,
          useValue: fakeConsentService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get userConsents from service and dataSource populate', () => {
    expect(fakeConsentService.getUserConsents).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBeGreaterThanOrEqual(1);
  });
});
