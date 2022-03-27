import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConsentInterface } from '../../core/models/consents/consentInterface';
import { ConsentService } from '../../core/services/consents.service';

@Component({
  selector: 'app-give-consents',
  templateUrl: './give-consents.component.html',
  styleUrls: ['./give-consents.component.scss'],
})
export class GiveConsentsComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    consents: this.formBuilder.array([]),
  });
  public consentList: ConsentInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.consentList = this.consentService.getConsentList();
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
    return selectedConsents.length > 0;
  }

  get consents(): FormArray {
    return this.form.get('consents') as FormArray;
  }

  get name(): FormArray {
    return this.form.get('name') as FormArray;
  }

  get email(): FormArray {
    return this.form.get('email') as FormArray;
  }

  submit() {
    const { value } = this.form.value;
    console.log(this.form.value);
    this.consentService.postConsentList({
      email: value?.email,
      name: value?.name,
      consents: value?.consents!.filter(
        (consent: ConsentInterface) => consent.checked
      ),
    });
  }
}
