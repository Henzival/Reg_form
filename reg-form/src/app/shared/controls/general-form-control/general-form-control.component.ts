import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'general-form-input',
  templateUrl: './general-form-control.html',
  styleUrl: './general-form-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeneralFormControl),
      multi: true
    }
  ]
})
export class GeneralFormControl implements ControlValueAccessor {
  @Input() control: any;
  @Input() formArray: any;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() requiredError: any;
  @Input() invalidError: any;
  

  // функции для установления связи между компонентом и формой
  onChange: any = () => {};
  onTouched: any = () => {};

  // методы для обновления значения в компоненте
  writeValue(value: any): void {
    // обновление значения компонента с учётом переданного значения
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  showError(errorKey: string, control: any): boolean {
    if (errorKey === 'required') {
      return control.hasError('required') && control.touched && !control.hasError('invalidPhoneNumber');
    } else if (errorKey === 'invalidPhoneNumber') {
      return !control.hasError('required') && control.hasError('invalidPhoneNumber') && control.touched;
    }
    return false;
  }
}
