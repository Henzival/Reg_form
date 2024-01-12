import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'general-form-control',
  templateUrl: './general-form-control.html',
  styleUrl: './general-form-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeneralFormControl),
      multi: true,
    },
  ],
})
export class GeneralFormControl implements ControlValueAccessor {
  @Input()
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
