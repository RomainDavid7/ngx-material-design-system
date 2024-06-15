import { provideRouter } from '@angular/router';
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideExperimentalZonelessChangeDetection()]
};
