import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface ConsentInterface {
  name: string;
  value: string;
  checked: boolean;
}

const CONSENT_LIST: Array<ConsentInterface> = [
  { name: 'Receive newsletter', value: 'newsletter', checked: false },
  { name: 'Be shown targeted ads', value: 'ads', checked: false },
  {
    name: 'Contribute to anonymous visit statistics',
    value: 'stats',
    checked: false,
  },
];
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
  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.consentList = CONSENT_LIST;
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
}
