import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpEngComponent } from './sign-up-eng.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignUpEngComponent],
  imports: [CommonModule, RouterModule],
  exports: [SignUpEngComponent],
})
export class SignUpEngModule {}
