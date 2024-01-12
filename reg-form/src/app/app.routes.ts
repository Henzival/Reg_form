import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GeneralFormRuModule } from './modules/general-form-ru/general-form-ru.module';
import { SignUpRuComponent } from './modules/sign-up-ru/sign-up-ru.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: SignUpRuComponent },
  {
    path: 'registration-ru',
    loadChildren: () =>
      import('./modules/general-form-ru/general-form-ru.module').then(
        (m) => m.GeneralFormRuModule
      ),
  },
];
