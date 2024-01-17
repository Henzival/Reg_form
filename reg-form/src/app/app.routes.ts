import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GeneralFormModule } from './modules/general-form/general-form.module';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { GeneralFormComponent } from './modules/general-form/general-form.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  {
    path: 'registration',
    loadChildren: () =>
      import('./modules/general-form/general-form.module').then(
        (mod) => mod.GeneralFormModule
      ),
  },
];
