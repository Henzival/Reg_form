import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormControl } from './general-form-control.component';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GeneralFormControl],
  imports: [CommonModule, TranslocoModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormControl],
})
export class GeneralFormControlModule {}
