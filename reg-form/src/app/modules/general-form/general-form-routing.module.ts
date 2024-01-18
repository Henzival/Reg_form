import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralFormComponent } from './general-form.component';

const routes: Routes = [{ path: '', component: GeneralFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralFormRoutingModule {}
