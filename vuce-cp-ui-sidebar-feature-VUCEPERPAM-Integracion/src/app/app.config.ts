import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// Configuración de la aplicación
export const appConfig: ApplicationConfig = {
  // Proveedores de la configuración, en este caso, el enrutador con las rutas definidas
  providers: [provideRouter(routes)]
};
