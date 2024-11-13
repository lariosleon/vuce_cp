import { Component } from '@angular/core';

/**
 * @description Componente InicioComponent para renderizar el ícono de inicio.
 */
@Component({
  selector: "app-inicio",// Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_849_21692)">
        <path
          d="M15.3125 11.25H10.7812V15.7812H15.3125V11.25ZM14.6875 15.1562H11.4062V11.875H14.6875V15.1562Z"
          fill="currentColor"
        />
        <path
          d="M2.65625 9.96875V19.6875H17.3437V9.96875L18.5937 11.2188L19.8125 10L17.3437 7.53125V1.875H14.375V4.5625L10 0.1875L0.1875 10L1.40625 11.2188L2.65625 9.96875ZM8.59375 19.0625H5.3125V11.875H8.59375V19.0625ZM16.7187 9.375V19.0625H9.21875V11.25H4.6875V19.0625H3.28125V9.375H3.25L10 2.625L16.75 9.375H16.7187ZM10 1.0625L15 6.0625V2.5H16.7187V7.78125L18.9375 10L18.5937 10.3438L10 1.75L1.40625 10.3438L1.0625 10L10 1.0625Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_849_21692">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class InicioComponent {}
