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
  language: string = 'ru';

  constructor(
    private languagesService: GetLanguagesService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.observableSubscribe();
    this.translate.setDefaultLang('ru');
  }

  private observableSubscribe(): void {
    this.langServiceObs$ = this.languagesService.dataGetter();
  }

  public selectChangeHandler(selectClick: any) {
    console.log(selectClick.target.value);
    this.language = selectClick.target.value;
    this.translate.use(selectClick.target.value);
  }
}
