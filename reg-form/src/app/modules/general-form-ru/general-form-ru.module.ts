import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormRuComponent } from './general-form-ru.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetLanguagesService } from '../../shared/services/get-languages.service';

@NgModule({
  declarations: [GeneralFormRuComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormRuComponent],
  providers: [GetLanguagesService],
})
export class GeneralFormRuModule {}
