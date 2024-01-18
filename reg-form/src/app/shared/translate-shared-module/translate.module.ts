import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ]
})
export class TranslateSharedModule {}
