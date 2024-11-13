import { Component } from '@angular/core';

/**
 * @description Componente HealthComponent para renderizar el el ícono de salud.
 */
@Component({
  selector: "app-health",// Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_849_21696)">
        <rect width="20" height="20" />
        <path
          d="M12.0625 3.82812H7.9375V7.92188H3.82812V12.0625H7.92188V16.1562H12.0625V12.0625H16.1562V7.9375H12.0625V3.82812ZM15.5469 8.5625V11.4531H11.4375V15.5469H8.5625V11.4375H4.45312V8.5625H8.54688V4.45312H11.4375V8.54688H15.5469V8.5625Z"
          fill="currentColor"
        />
        <path
          d="M10 0.3125C4.65625 0.3125 0.3125 4.65625 0.3125 10C0.3125 15.3438 4.65625 19.6875 10 19.6875C15.3438 19.6875 19.6875 15.3438 19.6875 10C19.6875 4.65625 15.3438 0.3125 10 0.3125ZM10 19.0625C5 19.0625 0.9375 15 0.9375 10C0.9375 5 5 0.9375 10 0.9375C15 0.9375 19.0625 5 19.0625 10C19.0625 15 15 19.0625 10 19.0625Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_849_21696">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class HealthComponent {}
