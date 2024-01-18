import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormArray } from './general-form-control.component';
import { TranslocoModule } from '@ngneat/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GeneralFormArray],
  imports: [CommonModule, TranslocoModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormArray],
})
export class GeneralFormArrayModule {}
