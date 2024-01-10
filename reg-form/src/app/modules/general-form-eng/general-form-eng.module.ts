import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormEngComponent } from './general-form-eng.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetLanguagesService } from '../../shared/services/get-languages.service';

@NgModule({
  declarations: [GeneralFormEngComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormEngComponent],
  providers: [GetLanguagesService],
})
export class GeneralFormEngModule {}
