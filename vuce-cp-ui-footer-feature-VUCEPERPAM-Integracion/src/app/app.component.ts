import { Component, inject } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { SingleSpaService } from '../single-spa/single-spa.service';

/**
 * @Component es un decorador que marca una clase como un componente Angular
 * y proporciona metadatos de configuración que determinan cómo se debe procesar,
 * instanciar y utilizar el componente en tiempo de ejecución.
 */
@Component({
  selector: "vuce-footer", // El selector utilizado para instanciar este componente.
  standalone: true, // Indica que este componente puede funcionar de manera independiente.
  imports: [RouterOutlet], // Los módulos y componentes que este componente necesita importar.
  templateUrl: "./app.component.html",  // La ruta del archivo HTML de la plantilla del componente.
  styleUrl: "./app.component.scss", // La ruta del archivo SCSS de los estilos del componente.
})
export class AppComponent {
  // Inyección del servicio SingleSpaService
  private spaService = inject(SingleSpaService);

  // URL del logo obtenida del servicio SingleSpaService
  urlLogo = this.spaService.assetUrl("images/logo-mincetur.svg");

  // URL de la imagen ISO obtenida del servicio SingleSpaService
  urlIso = this.spaService.assetUrl("images/iso-9001.svg");
}
