import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from './shared/interfaces/languagearray-interface';
import { GetLanguagesService } from './shared/services/get-languages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reg-form';
  constructor() {}
}
