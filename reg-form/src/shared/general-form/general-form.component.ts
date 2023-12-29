import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";

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
            username: new FormControl(null),
            email: new FormControl(null),
            phoneNumber: new FormArray([
                new FormControl(''),
                new FormControl(''),
            ]),
            password: new FormControl(null),
            repeatPassword: new FormControl(null),
        })
    }
    get formData() { return <FormArray>this.generalForm.get('phoneNumber'); }
}