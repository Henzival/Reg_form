import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GetLanguagesService } from '../services/get-languages.service';

@Component({
  selector: 'general-form',
  templateUrl: './general-form.html',
  styleUrl: './general-form.component.scss',
})
export class GeneralFormComponent {
  generalForm!: FormGroup;

  languagesArray!: Array<{ language: string }>;

  constructor(private languagesService: GetLanguagesService) {
    this.createForm();
    this.getData();
  }

  private getData(): void {
    this.languagesService
      .dataGetter()
      .subscribe((res) => this.getLanguagesArray(res));
  }

  private getLanguagesArray(languagesObject: { languages: any }): void {
    this.languagesArray = languagesObject.languages;
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
}
