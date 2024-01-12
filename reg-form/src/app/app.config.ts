import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
