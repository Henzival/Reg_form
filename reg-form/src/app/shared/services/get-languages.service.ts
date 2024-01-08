import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class GetLanguagesService {
  constructor(private http: HttpClient) {}
  public dataGetter(): Observable<any> {
    return this.http
      .get('../../assets/languages/languages.json')
      .pipe(map((res) => res));
  }
}