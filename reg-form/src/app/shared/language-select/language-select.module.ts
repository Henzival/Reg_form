import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './language-select.component';

@NgModule({
  declarations: [LanguageSelectComponent],
  imports: [
    CommonModule,
  ],
  exports: [LanguageSelectComponent],
  providers: [],
})
export class LanguageSelectModule {}
