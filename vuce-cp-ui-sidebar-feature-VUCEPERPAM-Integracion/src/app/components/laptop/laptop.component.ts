import { Component } from "@angular/core";

/**
 * @description Componente LaptopComponent para renderizar el ícono de laptop.
 */
@Component({
  selector: "app-laptop",// Selector que se usa para insertar este componente en una plantilla HTML.
  standalone: false,// Indica que este componente no es independiente y debe ser declarado en un módulo.
  template: `
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_849_21702)">
        <path
          d="M18.125 15.0001V4.0251C18.1234 3.90419 18.0978 3.78481 18.0496 3.67389C18.0015 3.56297 17.9318 3.46273 17.8445 3.37899C17.7573 3.29525 17.6543 3.22968 17.5415 3.1861C17.4287 3.14251 17.3084 3.12178 17.1875 3.1251H2.81251C2.69164 3.12178 2.57131 3.14251 2.45852 3.1861C2.34573 3.22968 2.24273 3.29525 2.1555 3.37899C2.06827 3.46273 1.99855 3.56297 1.9504 3.67389C1.90225 3.78481 1.87662 3.90419 1.87501 4.0251V15.0001H1.35031e-05V15.2751C-0.00170771 15.6935 0.161181 16.0958 0.453516 16.3952C0.74585 16.6945 1.14418 16.8669 1.56251 16.8751H18.4375C18.8558 16.8669 19.2542 16.6945 19.5465 16.3952C19.8388 16.0958 20.0017 15.6935 20 15.2751V15.0001H18.125ZM2.50001 4.0251C2.50156 3.98621 2.51098 3.94804 2.52771 3.91289C2.54444 3.87775 2.56814 3.84637 2.59736 3.82066C2.62658 3.79495 2.66071 3.77544 2.6977 3.76331C2.73468 3.75118 2.77374 3.74669 2.81251 3.7501H17.1875C17.2263 3.74669 17.2653 3.75118 17.3023 3.76331C17.3393 3.77544 17.3734 3.79495 17.4027 3.82066C17.4319 3.84637 17.4556 3.87775 17.4723 3.91289C17.489 3.94804 17.4985 3.98621 17.5 4.0251V15.0001H2.50001V4.0251ZM1.56251 16.2501C1.3718 16.239 1.18804 16.1746 1.03221 16.064C0.87639 15.9535 0.754778 15.8014 0.681264 15.6251H8.75001V16.2501H1.56251ZM18.4375 16.2501H11.25V15.6251H19.3188C19.2452 15.8014 19.1236 15.9535 18.9678 16.064C18.812 16.1746 18.6282 16.239 18.4375 16.2501Z"
          fill="currentColor"
        />
        <path
          d="M3.125 14.375H16.875V4.375H3.125V14.375ZM3.75 5H16.25V13.75H3.75V5Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_849_21702">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  styles: ``,
})
export class LaptopComponent {}