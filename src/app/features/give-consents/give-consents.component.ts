import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConsentInterface } from '@core/models/consents/consent-interface';
import { ConsentService } from '@core/services/consents.service';

@Component({
  selector: 'app-give-consents',
  templateUrl: './give-consents.component.html',
  styleUrls: ['./give-consents.component.scss'],
})
export class GiveConsentsComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    consents: this.formBuilder.array([]),
  });
  public consentList: ConsentInterface[] = [];
  public result: string = '';

  get consents(): FormArray {
    return this.form.get('consents') as FormArray;
  }

  get name(): FormArray {
    return this.form.get('name') as FormArray;
  }

  get email(): FormArray {
    return this.form.get('email') as FormArray;
  }

  constructor(
    private location: Router,
    private formBuilder: FormBuilder,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    const { value } = this.form;
    if (
      this.consentService.postConsentList({
        email: value?.email,
        username: value?.name,
        consentsType: value
          ?.consents!.filter((consent: ConsentInterface) => consent.checked)
          .map((consent: ConsentInterface) => consent.value),
      })
    ) {
      this.location.navigate(['/consents']);
    } else {
      this.result = "Your consents couldn't be sent";
    }
  }

  private initForm() {
    this.consents.clear();
    this.consentList = this.consentService.getSubscribableConsent();
    this.consentList.forEach((consent) => {
      this.consents.push(
        new FormGroup({
          name: new FormControl(consent.name),
          checked: new FormControl(consent.checked),
          value: new FormControl(consent.value),
        })
      );
    });
  }

  canSubmit(): boolean {
    const { value } = this.form;
    const selectedConsents: Array<ConsentInterface> =
      value?.consents!.filter((consent: ConsentInterface) => consent.checked) ||
      [];
    return selectedConsents.length > 0 && this.name.valid && this.email.valid;
  }
}
