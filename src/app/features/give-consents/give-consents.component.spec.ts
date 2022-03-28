import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsentTypeName } from '@core/models/consents/consent-interface';
import { ConsentService } from '@core/services/consents.service';
import { SharedModule } from '@shared/shared.module';
import { ConsentsComponent } from '../consents/consents.component';
import { GiveConsentsComponent } from './give-consents.component';

describe('GiveConsentsComponent', () => {
  let fakeConsentService: Pick<
    ConsentService,
    'postConsentList' | 'getSubscribableConsent'
  >;
  let component: GiveConsentsComponent;
  let fixture: ComponentFixture<GiveConsentsComponent>;

  beforeEach(async () => {
    fakeConsentService = {
      postConsentList: () => {
        return true;
      },
      getSubscribableConsent: () => [
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
      ],
    };

    spyOn(fakeConsentService, 'postConsentList').and.callThrough();
    spyOn(fakeConsentService, 'getSubscribableConsent').and.callThrough();

    await TestBed.configureTestingModule({
      declarations: [GiveConsentsComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'consents', component: ConsentsComponent },
        ]),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
      ],
      providers: [
        {
          provide: ConsentService,
          useValue: fakeConsentService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch SubscribableConsent from services', () => {
    expect(fakeConsentService.getSubscribableConsent).toHaveBeenCalled();
  });

  it('should submit form and navigate to /consents', () => {
    component.submit();
    expect(fakeConsentService.postConsentList).toHaveBeenCalled();
  });
});
