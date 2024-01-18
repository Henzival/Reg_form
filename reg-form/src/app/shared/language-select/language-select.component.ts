import { Component } from '@angular/core';
import { Language } from '../interfaces/languagearray-interface';
import { Observable } from 'rxjs';
import { GetLanguagesService } from '../services/get-languages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'language-select',
  templateUrl: './language-select.html',
  styleUrl: './language-select.component.scss',
})
export class LanguageSelectComponent {
    langServiceObs$!: Observable<Language[]>;
    constructor(
      private languagesService: GetLanguagesService,
      public translate: TranslateService
    ) {
      this.langServiceObs$ = this.languagesService.getLanguages();
      this.translate.setDefaultLang('en');
    }
  
    public selectChangeHandler(selectClick: any): void {
      this.translate.use(selectClick.target.value);
    }
}
