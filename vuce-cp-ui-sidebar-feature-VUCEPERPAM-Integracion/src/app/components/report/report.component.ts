import { Component } from '@angular/core';
/**
 * @description Componente ReportComponent para renderizar el ícono de informe.
 */
@Component({
  selector: "app-report",// Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.1875 0.375V23.625H20.8125V4.35L16.8375 0.375H3.1875ZM17.0625 1.65L19.5375 4.125H17.0625V1.65ZM3.9375 22.875V1.125H16.3125V4.875H20.0625V22.875H3.9375Z"
        fill="currentColor"
      />
      <path
        d="M18.5625 14.4375H5.4375V15.1875H18.5625V14.4375Z"
        fill="currentColor"
      />
      <path
        d="M18.5625 16.3125H5.4375V17.0625H18.5625V16.3125Z"
        fill="currentColor"
      />
      <path
        d="M18.5625 18.1875H13.875V18.9375H18.5625V18.1875Z"
        fill="currentColor"
      />
      <path
        d="M12 11.925C13.6312 11.925 15.2625 11.6437 16.8187 11.1L17.0625 11.0062V9.63745L16.4813 9.4687V8.92495C16.4813 7.23745 15.5437 5.69995 14.0625 4.94995V4.91245C14.0625 4.4812 13.7063 4.12495 13.275 4.12495H12.375V4.01245H11.625V4.12495H10.725C10.2938 4.12495 9.9375 4.4812 9.9375 4.91245V4.94995C8.45625 5.7187 7.51875 7.2562 7.51875 8.92495V9.4687L6.9375 9.6562V11.025L7.18125 11.1187C8.7375 11.6437 10.3688 11.925 12 11.925ZM7.6875 10.2187L8.26875 10.05V8.9437C8.26875 7.68745 8.90625 6.5062 9.9375 5.8312V6.97495H10.6875V4.91245C10.6875 4.8937 10.7063 4.87495 10.725 4.87495H11.625V8.1187H12.375V4.87495H13.275C13.2938 4.87495 13.3125 4.8937 13.3125 4.91245V6.97495H14.0625V5.8312C15.0938 6.52495 15.7313 7.68745 15.7313 8.9437V10.05L16.3125 10.2187V10.4812C13.5188 11.4 10.4812 11.4 7.6875 10.4812V10.2187Z"
        fill="currentColor"
      />
      <path
        d="M14.8687 9.3938H9.11249V10.1438H14.8687V9.3938Z"
        fill="currentColor"
      />
    </svg>
  `,
  styles: ``,
})
export class ReportComponent {}
