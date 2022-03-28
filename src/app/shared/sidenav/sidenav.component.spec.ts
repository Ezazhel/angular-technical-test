import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { findEl } from '../../spec-helper/element.spec-helper';
import { SharedModule } from '../shared.module';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      providers: [SharedModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move to /consents', () => {
    const routerLink = findEl(
      fixture,
      'goto-consents'
    ).nativeElement.getAttribute('routerLink');

    expect(routerLink).toEqual('/consents');
  });

  it('should move to /give-consents', () => {
    const routerLink = findEl(
      fixture,
      'goto-give-consents'
    ).nativeElement.getAttribute('routerLink');

    expect(routerLink).toEqual('/give-consents');
  });
});
