import { Component } from '@angular/core';

/**
 * @description Componente AnchorComponent para renderizar el ícono de ancla.
 */
@Component({
  selector: "app-anchor", // Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false, // Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <!-- Define el primer trazado del ícono de ancla -->
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.4 9.50485C17.4 9.24272 17.3711 9.70874 17.3135 9.4466C17.0829 10.4369 15.5265 8.33981 15.5265 11.8058C14.2871 12.6796 12.4137 13.1456 10.1655 13.2621L9.76201 6.53398H11.059V5.36893H9.70437L9.6179 4.29126C10.2808 4.05825 10.7708 3.4466 10.7708 2.68932C10.7708 1.75728 9.96377 1 9.04145 1C8.11914 1 7.31211 1.75728 7.31211 2.68932C7.31211 3.4466 7.80209 4.05825 8.46501 4.29126L8.37854 5.36893H7.02388V6.53398H8.43618L8.03267 13.233C5.87099 13.1165 4.11282 12.6214 2.90228 11.7767C2.90228 8.33981 1.31705 10.3786 1.08647 9.38835C1.02882 9.65049 1 9.18447 1 9.4466C1 10.3204 1.43234 11.2233 1.95114 12.068C3.04639 13.8447 5.17925 15.301 7.91738 15.5631L9.0991 19L10.2808 15.5922C13.1342 15.3592 15.3536 13.8738 16.4776 12.068C16.9964 11.2816 17.4 10.3786 17.4 9.50485Z"
        stroke="currentColor"
        stroke-width="0.5"
      />
      <!-- Define el segundo trazado del ícono de ancla -->
      <path
        d="M9.0701 3.09708C9.2452 3.09708 9.38715 2.95363 9.38715 2.77669C9.38715 2.59974 9.2452 2.4563 9.0701 2.4563C8.895 2.4563 8.75305 2.59974 8.75305 2.77669C8.75305 2.95363 8.895 3.09708 9.0701 3.09708Z"
        stroke="currentColor"
        stroke-width="0.5"
      />
    </svg>
  `,
  styles: ``,
})
export class AnchorComponent {}
