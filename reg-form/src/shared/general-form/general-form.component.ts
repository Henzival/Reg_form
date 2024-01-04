import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from "@angular/forms";
import { ParsingServiceService } from "../parsing-service/parsing-service.service";
import { GetjsonPipe } from "../tranformjsondata/tranformjsondata.pipe";

@Component({
    selector: 'general-form',
    templateUrl: './general-form.html',
    styleUrl: './general-form.component.sass'
})

export class GeneralFormComponent {
    generalForm!: FormGroup;
    finalize: any;
    constructor(private service: ParsingServiceService) {
        this._createForm();
        this.getData();
    }
    private getData() {
        this.service.dataSetter().then((res) => {
            this.changeData(res);
        });
    }
    private async changeData(data: any) {
        console.log(data.languages[0].name);
        this.finalize = data.languages;
        console.log(this.finalize);
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