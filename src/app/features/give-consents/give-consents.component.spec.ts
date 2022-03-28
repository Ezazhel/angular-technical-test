import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { GiveConsentsComponent } from './give-consents.component';

describe('GiveConsentsComponent', () => {
  let component: GiveConsentsComponent;
  let fixture: ComponentFixture<GiveConsentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiveConsentsComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule,
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
});
