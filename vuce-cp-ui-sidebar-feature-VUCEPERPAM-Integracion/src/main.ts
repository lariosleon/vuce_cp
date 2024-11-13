import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función para arrancar la aplicación en el navegador.
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación.
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación.
/**
 * Arranca la aplicación Angular utilizando el componente raíz `AppComponent` y la configuración `appConfig`.
 * Si ocurre algún error durante el proceso de arranque, se captura y se registra en la consola.
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Maneja errores en el arranque y los imprime en la consola.
