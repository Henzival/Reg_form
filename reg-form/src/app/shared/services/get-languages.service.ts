import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import { Language } from '../interfaces/languagearray-interface';
import { LanguageDTO } from '../interfaces/language-interface';
import { mapLanguages } from '../mappers/language.mapper';

@Injectable()
export class GetLanguagesService {
  constructor(private http: HttpClient) {}
  public dataGetter(): Observable<Language[]> {
    return this.http
      .get<LanguageDTO>('../../assets/languages/languages.json')
      .pipe(map(mapLanguages));
  }
}
