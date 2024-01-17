import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    GeneralFormModule,
    SignUpModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    TranslateSharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reg-form';
  langServiceObs$!: Observable<Language[]>;

  constructor(
    private languagesService: GetLanguagesService,
    private translate: TranslateService
  ) {
    this.langServiceObs$ = this.languagesService.dataGetter();
    this.translate.setDefaultLang('en');
  }

  public selectChangeHandler(selectClick: any): void {
    this.translate.use(selectClick.target.value);
  }
}
