import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GeneralFormRuModule } from './modules/general-form-ru/general-form-ru.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { GetLanguagesService } from './shared/services/get-languages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    GeneralFormRuModule,
    SignUpModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'reg-form';
  langServiceSubscription!: Subscription;
  languagesArray!: Array<{ language: string }>;

  constructor(private languagesService: GetLanguagesService) {
    this.getData();
  }

  private getData(): void {
    this.langServiceSubscription = this.languagesService
      .dataGetter()
      .subscribe((res) => this.getLanguagesArray(res));
  }

  private getLanguagesArray(languagesObject: { languages: any }): void {
    this.languagesArray = languagesObject.languages;
    this.langServiceSubscription.unsubscribe();
  }
}
