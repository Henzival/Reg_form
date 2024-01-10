import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CustomValidators } from '../../validators/custom-password.validator';
@Component({
  selector: 'general-form-ru',
  templateUrl: './general-form-ru.html',
  styleUrl: './general-form-ru.component.scss',
})
export class GeneralFormRuComponent {
  generalForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.generalForm = this.fb.group({
      username: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      phoneNumber: this.fb.array([['', [Validators.required]]]),

      password: ['', [Validators.required, Validators.minLength(5)]],

      repeatPassword: [''],

      validators: [CustomValidators.match('password', 'repeatPassword')],
    });
  }

  public addPhoneNumber(): void {
    this.formData.push(new FormControl('', [Validators.required]));
  }

  get email(): AbstractControl<any, any> | null {
    return this.generalForm.get('email');
  }

  public deletePhoneNumber(): void {
    if (this.formData.length !== 1) {
      this.formData.removeAt(this.formData.length - 1);
    }
  }

  get formData(): FormArray {
    return <FormArray>this.generalForm.get('phoneNumber');
  }

  get formDataLang(): FormArray {
    return <FormArray>this.generalForm.get('languages');
  }

  public onSubmit() {
    this.submitted = true;

    if (this.generalForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.generalForm.value, null, 4)
    );
  }

  public onReset() {
    this.submitted = false;
    this.generalForm.reset();
  }
}
