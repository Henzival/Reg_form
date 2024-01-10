import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRuComponent } from './sign-up-ru.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignUpRuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SignUpRuComponent],
})
export class SignUpRuModule {}
