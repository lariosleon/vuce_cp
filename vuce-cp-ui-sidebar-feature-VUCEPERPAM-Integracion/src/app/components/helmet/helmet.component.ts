import { Component } from '@angular/core';

/**
 * @description Componente HelmetComponent para renderizar el ícono de casco.
 */
@Component({
  selector: "app-helmet",// Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17.0781C13.0469 17.0781 16.1094 16.5625 19.0156 15.5469L19.2188 15.4688V13.4531L18.125 13.1406V11.8125C18.125 8.6875 16.3281 5.84375 13.5156 4.48438V4.15625C13.5156 3.54688 13.0312 3.0625 12.4219 3.0625H10.3125V2.4375H9.6875V3.0625H7.57812C6.96875 3.0625 6.48438 3.54688 6.48438 4.15625V4.48438C3.67188 5.84375 1.875 8.70312 1.875 11.8125V13.1406L0.78125 13.4531V15.4688L0.984375 15.5469C3.89062 16.5781 6.95312 17.0781 10 17.0781ZM1.40625 13.9375L2.5 13.625V11.8125C2.5 9.03125 4.04688 6.48438 6.48438 5.1875V8.0625H7.10938V4.15625C7.10938 3.89062 7.3125 3.6875 7.57812 3.6875H9.6875V10.25H10.3125V3.6875H12.4219C12.6875 3.6875 12.8906 3.89062 12.8906 4.15625V8.0625H13.5156V5.1875C15.9531 6.48438 17.5 9.03125 17.5 11.8125V13.6094L18.5938 13.9219V15.0312C13.0469 16.9219 6.95312 16.9219 1.40625 15.0312V13.9375Z"
        fill="currentColor"
      />
      <path
        d="M15.4688 13.0625H4.53125V13.6875H15.4688V13.0625Z"
        fill="currentColor"
      />
    </svg>
  `,
  styles: ``,
})
export class HelmetComponent {}
