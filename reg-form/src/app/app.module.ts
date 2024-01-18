import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GeneralFormModule } from './modules/general-form/general-form.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { GetLanguagesService } from './shared/services/get-languages.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Language } from './shared/interfaces/languagearray-interface';
import { map } from 'rxjs';
import { LanguageSelectModule } from './shared/language-select/language-select.module';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    GeneralFormModule,
    SignUpModule,
    FormsModule,
    RouterModule,
    LanguageSelectModule,
    TranslocoRootModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
