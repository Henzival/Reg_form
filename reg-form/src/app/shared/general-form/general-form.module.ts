import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralFormComponent } from './general-form.component';
import { GetLanguagesService } from '../services/get-languages.service';

@NgModule({
  declarations: [GeneralFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormComponent],
  providers: [GetLanguagesService],
})
export class GeneralFormModule {}
