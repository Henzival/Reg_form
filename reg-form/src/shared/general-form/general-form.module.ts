import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralFormComponent } from './general-form.component';


@NgModule({
  declarations: [GeneralFormComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [GeneralFormComponent],
})
export class GeneralFormModule { }
