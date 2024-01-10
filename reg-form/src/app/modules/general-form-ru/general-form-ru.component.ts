import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GetLanguagesService } from '../../shared/services/get-languages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'general-form-ru',
  templateUrl: './general-form-ru.html',
  styleUrl: './general-form-ru.component.scss',
})
export class GeneralFormRuComponent {
  generalForm!: FormGroup;
  submitted: boolean = false;
  langServiceSubscription!: Subscription;
  languagesArray!: Array<{ language: string }>;

  constructor(private languagesService: GetLanguagesService) {
    this.createForm();
    this.getData();
  }

  private getData(): void {
    this.langServiceSubscription = this.languagesService
      .dataGetter()
      .subscribe((res) => this.getLanguagesArray(res));
  }

  private getLanguagesArray(languagesObject: { languages: any }): void {
    this.languagesArray = languagesObject.languages;
    this.langServiceSubscription.unsubscribe();
  }

  private createForm(): void {
    this.generalForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormArray([new FormControl('', [Validators.required])]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      repeatPassword: new FormControl(''),
      languages: new FormArray([new FormControl('')]),
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.generalForm.invalid) {
      return;
    }
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.generalForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.generalForm.reset();
  }
}
