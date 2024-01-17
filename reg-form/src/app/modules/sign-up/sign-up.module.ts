import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import {
  TranslateModule,
  TranslateService,
  TranslateLoader,
} from '@ngx-translate/core';
import { TranslateSharedModule } from '../../shared/translate-shared-module/translate.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule, TranslateSharedModule],
  exports: [SignUpComponent],
  providers: [TranslateService],
})
export class SignUpModule {}
