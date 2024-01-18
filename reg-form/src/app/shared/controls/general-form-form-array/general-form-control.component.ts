import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'general-form-array',
  templateUrl: './general-form-array.html',
  styleUrl: '../general-form-control/general-form-control.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeneralFormArray),
      multi: true
    }
  ]
})
export class GeneralFormArray implements ControlValueAccessor {
  @Input() formArray: any;

  // функции для установления связи между компонентом и формой
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    // обновляем значение компонента на основе переданного значения
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // обрабатываем состояние отключения компонента
  }
}