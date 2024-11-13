import { Component } from '@angular/core';


/**
 * @description Componente KeyComponent para renderizar el ícono de llave.
 */
@Component({
  selector: "app-key", // Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.73438 6.48437C1.92188 6.48437 1.25 5.8125 1.25 5C1.25 4.1875 1.92188 3.51562 2.73438 3.51562C3.54688 3.51562 4.21875 4.1875 4.21875 5C4.21875 5.8125 3.54688 6.48437 2.73438 6.48437ZM2.73438 4.14062C2.26563 4.14062 1.875 4.53125 1.875 5C1.875 5.46875 2.26563 5.85937 2.73438 5.85937C3.20313 5.85937 3.59375 5.46875 3.59375 5C3.59375 4.53125 3.20313 4.14062 2.73438 4.14062Z"
        fill="currentColor"
      />
      <path
        d="M9.60938 6.95312C8.84375 8.75 7.0625 10 5 10C2.25 10 1.93579e-07 7.75 1.2489e-07 5C5.62004e-08 2.25 2.25 -1.72114e-07 5 -3.82475e-07C7.0625 -5.40245e-07 8.84375 1.25 9.60938 3.04687L17.6094 3.04687L19.5 4.5625L17.6563 6.95312L15.8125 6.95312L15.1563 6.29687L14.5 6.95312L12.6875 6.95312L12.0313 6.29687L11.375 6.95312L9.60938 6.95312ZM5 0.625C2.59375 0.625 0.625 2.59375 0.625 5C0.625 7.40625 2.59375 9.375 5 9.375C7.40625 9.375 9.375 7.40625 9.375 5C9.375 2.59375 7.40625 0.624999 5 0.625ZM12.0313 5.42187L12.9375 6.32812L14.2344 6.32812L15.1563 5.42187L16.0625 6.32812L17.3438 6.32812L18.4219 4.92187L11.25 4.92187L11.25 4.29687L18.1719 4.29687L17.3906 3.67187L9.8125 3.67187C9.92188 4.09375 10 4.54687 10 5C10 5.45312 9.9375 5.90625 9.8125 6.32812L11.1094 6.32812L12.0313 5.42187Z"
        fill="currentColor"
      />
    </svg>
  `,
  styles: ``,
})
export class KeyComponent {}
