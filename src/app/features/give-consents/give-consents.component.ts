import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { ConsentInterface } from '../../core/models/consents/consentInterface';
import { ConsentService } from '../../core/services/consents.service';

@Component({
  selector: 'app-give-consents',
  templateUrl: './give-consents.component.html',
  styleUrls: ['./give-consents.component.scss'],
})
export class GiveConsentsComponent implements OnInit {
  @ViewChild(FormGroupDirective)
  public formGroupDirective!: FormGroupDirective;

  public form: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    consents: this.formBuilder.array([]),
  });
  public consentList: ConsentInterface[] = [];
  public result: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private consentService: ConsentService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.consents.clear();
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
    const { value } = this.form;
    if (
      this.consentService.postConsentList({
        email: value?.email,
        name: value?.name,
        consents: value
          ?.consents!.filter((consent: ConsentInterface) => consent.checked)
          .map((consent: ConsentInterface) => consent.name)
          .join(', '),
      })
    ) {
      this.result = 'Consents sent with success';
      this.formGroupDirective.resetForm();
      this.consents.clear();
      this.initForm();
      debugger;
    }
  }
}
