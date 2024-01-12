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
import { map } from 'rxjs';

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

  constructor(
    private languagesService: GetLanguagesService,
    private router: Router
  ) {
    this.observableSubscribe();
  }

  private observableSubscribe(): void {
    this.langServiceObs$ = this.languagesService.dataGetter();
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
