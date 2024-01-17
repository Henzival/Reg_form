import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { TranslateSharedModule } from './shared/translate-shared-module/translate.module';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
