import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { GeneralFormModule } from './modules/general-form/general-form.module';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  {
    path: 'registration',
    loadChildren: () =>
      import('./modules/general-form/general-form.module').then(
        (mod) => mod.GeneralFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
