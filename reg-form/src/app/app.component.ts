import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GeneralFormRuModule } from './modules/general-form-ru/general-form-ru.module';
import { SignUpRuModule } from './modules/sign-up-ru/sign-up-ru.module';
import { GetLanguagesService } from './shared/services/get-languages.service';
import { Observable, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Language } from './shared/interfaces/languagearray-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    GeneralFormRuModule,
    SignUpRuModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reg-form';
  langServiceObs$!: Observable<Language[]>;
  languagesArray!: Array<{ language: string }>;

  constructor(
    private languagesService: GetLanguagesService,
    private router: Router
  ) {
    this.observableSubscribe();
  }

  private observableSubscribe(): void {
    this.langServiceObs$ = this.languagesService.dataGetter();
  }

  private getLanguagesArray(languagesObject: { languages: any }): void {
    this.languagesArray = languagesObject.languages;
  }

  public selectChangeHandler(selectClick: any) {
    console.log(selectClick.target.value);
    switch (selectClick.target.value) {
      case 'Русский':
        this.router.navigateByUrl('/');
        break;
    }
  }
}
