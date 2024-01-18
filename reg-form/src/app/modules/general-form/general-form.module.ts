import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormComponent } from './general-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetLanguagesService } from '../../shared/services/get-languages.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { GeneralFormRoutingModule } from './general-form-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { GeneralFormControlModule } from '../../shared/controls/general-form-control/general-form-control.module';
import { GeneralFormArrayModule } from '../../shared/controls/general-form-form-array/general-form-control.module';


const routes: Routes = [{ path: '', component: GeneralFormComponent }];

@NgModule({
  declarations: [GeneralFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GeneralFormRoutingModule,
    TranslocoModule,
    GeneralFormControlModule,
    GeneralFormArrayModule
  ],
  exports: [GeneralFormComponent],
  providers: [GetLanguagesService],
})
export class GeneralFormModule {}
