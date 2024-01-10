import { Routes } from '@angular/router';
import { GeneralFormRuComponent } from './modules/general-form-ru/general-form-ru.component';
import { SignUpEngComponent } from './modules/sign-up-eng/sign-up-eng.component';
import { SignUpRuComponent } from './modules/sign-up-ru/sign-up-ru.component';
import { GeneralFormEngComponent } from './modules/general-form-eng/general-form-eng.component';
export const routes: Routes = [
  { path: '', component: SignUpRuComponent },
  { path: 'eng', component: SignUpEngComponent },
  { path: 'registration-ru', component: GeneralFormRuComponent },
  { path: 'registration-eng', component: GeneralFormEngComponent },
];
