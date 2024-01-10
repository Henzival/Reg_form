import { Routes } from '@angular/router';
import { GeneralFormRuComponent } from './modules/general-form-ru/general-form-ru.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'reg', component: GeneralFormRuComponent },
];
