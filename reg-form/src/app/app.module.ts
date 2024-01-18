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
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateSharedModule } from './shared/translate-shared-module/translate.module';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectModule } from './shared/language-select/language-select.module';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      isolate: false,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    LanguageSelectModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
