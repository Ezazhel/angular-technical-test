import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveConsentsComponent } from './give-consents.component';

describe('GiveConsentsComponent', () => {
  let component: GiveConsentsComponent;
  let fixture: ComponentFixture<GiveConsentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveConsentsComponent ]
    })
    .compileComponents();
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
