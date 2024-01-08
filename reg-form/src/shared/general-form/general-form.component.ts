import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ParsingServiceService } from '../services/parsing-service.service';
import { Observable, map, toArray } from 'rxjs';

@Component({
  selector: 'general-form',
  templateUrl: './general-form.html',
  styleUrl: './general-form.component.sass',
})
export class GeneralFormComponent {
  generalForm!: FormGroup;

  languagesArray: any;

  constructor(private service: ParsingServiceService) {
    this.createForm();
    this.getData();
  }

  private getData() {
    this.service.dataGetter().subscribe((res) => this.changeData(res));
  }

  private changeData(data: any) {
    this.languagesArray = data.languages;
    console.log(this.languagesArray);
  }

  private createForm() {
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

  public addPhoneNumber() {
    this.formData.push(new FormControl('', [Validators.required]));
  }

  get email() {
    return this.generalForm.get('email');
  }

  public deletePhoneNumber() {
    if (this.formData.length !== 1) {
      this.formData.removeAt(this.formData.length - 1);
    }
  }

  get formData() {
    return <FormArray>this.generalForm.get('phoneNumber');
  }

  get formDataLang() {
    return <FormArray>this.generalForm.get('languages');
  }
}
