import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFormComponent } from './general-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetLanguagesService } from '../../shared/services/get-languages.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateSharedModule } from '../../shared/translate-shared-module/translate.module';
import { Routes } from '@angular/router';
import { GeneralFormRoutingModule } from './general-form-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../../shared/translate-shared-module/translate.module';

const routes: Routes = [{ path: '', component: GeneralFormComponent }];

@NgModule({
  declarations: [GeneralFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateSharedModule,
    GeneralFormRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [GeneralFormComponent, TranslateModule],
  providers: [GetLanguagesService, TranslateService],
})
export class GeneralFormModule {}
