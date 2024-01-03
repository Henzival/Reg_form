import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'general-form',
    templateUrl: './general-form.html',
    styleUrl: './general-form.component.sass'
})

export class GeneralFormComponent {
    generalForm!: FormGroup;

    constructor() {
        this._createForm();
    }

    private _createForm() {
        this.generalForm = new FormGroup({
            username: new FormControl('', [
                Validators.required
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            phoneNumber: new FormArray([
                new FormControl('', [
                    Validators.required
                ]),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(5)
            ]),
            repeatPassword: new FormControl(''),
            languages: new FormArray([
                new FormControl(''),
            ]),
        })
    }

    public addPhoneNumber() {
        this.formData.push(new FormControl('', [
            Validators.required
        ]));
    }

    get email() {
        return this.generalForm.get('email');
    }
    
    public deletePhoneNumber() {
        if (this.formData.length !== 1) {
            this.formData.removeAt(this.formData.length - 1);
        }
    }

    get formData() { return <FormArray>this.generalForm.get('phoneNumber'); }
    get formDataLang() { return <FormArray>this.generalForm.get('languages'); }
}