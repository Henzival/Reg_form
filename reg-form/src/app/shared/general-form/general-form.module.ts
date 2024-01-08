import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralFormComponent } from './general-form.component';
import { ParsingServiceService } from '../services/parsing-service.service';

@NgModule({
  declarations: [GeneralFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [GeneralFormComponent],
  providers: [ParsingServiceService],
})
export class GeneralFormModule {}
