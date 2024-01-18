import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule, TranslocoModule],
  exports: [SignUpComponent],
  providers: [],
})
export class SignUpModule { }
