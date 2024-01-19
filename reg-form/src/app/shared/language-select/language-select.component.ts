import { Component } from '@angular/core';
import { Language } from '../interfaces/languagearray-interface';
import { Observable } from 'rxjs';
import { GetLanguagesService } from '../services/get-languages.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'language-select',
  templateUrl: './language-select.html',
  styleUrl: './language-select.component.scss',
})
export class LanguageSelectComponent {
  langServiceObs$!: Observable<Language[]>;
  constructor(
    private languagesService: GetLanguagesService,
    private translate: TranslocoService
  ) {
    this.langServiceObs$ = this.languagesService.getLanguages();
  }

  public selectChangeHandler(selectClick: any): void {
    this.translate.setActiveLang(selectClick.target.value);
  }
}
