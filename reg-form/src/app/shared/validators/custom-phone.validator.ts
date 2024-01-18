import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    const validPhoneNumber = /^\+[0-9]+$/.test(phoneNumber);
    return validPhoneNumber
      ? null
      : { invalidPhoneNumber: { value: control.value } };
  };
}
