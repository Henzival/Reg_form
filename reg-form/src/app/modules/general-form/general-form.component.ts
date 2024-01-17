import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { CustomValidators } from '../../shared/validators/custom-password.validator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'general-form',
  templateUrl: './general-form.html',
  styleUrl: './general-form.component.scss',
})
export class GeneralFormComponent {
  generalForm!: FormGroup;
  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.createForm();
  }

  private createForm(): void {
    this.generalForm = this.fb.group(
      {
        username: ['', Validators.required],

        email: ['', [Validators.required, Validators.email]],

        phoneNumber: this.fb.array([['', [Validators.required]]]),

        password: ['', [Validators.required, Validators.minLength(5)]],

        repeatPassword: [''],
      },
      { validators: [CustomValidators.match('password', 'repeatPassword')] }
    );
  }

  public addPhoneNumber(): void {
    this.formPhoneNumber.push(new FormControl('', [Validators.required]));
  }

  get email(): AbstractControl<any, any> | null {
    return this.generalForm.get('email');
  }

  public deletePhoneNumber(): void {
    if (this.formPhoneNumber.length !== 1) {
      this.formPhoneNumber.removeAt(this.formPhoneNumber.length - 1);
    }
  }

  get formPhoneNumber(): FormArray {
    return <FormArray>this.generalForm.get('phoneNumber');
  }

  get formDataLang(): FormArray {
    return <FormArray>this.generalForm.get('languages');
  }

  public onSubmit() {
    if (this.generalForm.invalid) {
      this.generalForm.markAllAsTouched();
    } else {
      alert(
        'SUCCESS!! :-)\n\n' + JSON.stringify(this.generalForm.value, null, 4)
      );
    }
  }

  public onReset() {
    this.generalForm.reset();
  }
}
