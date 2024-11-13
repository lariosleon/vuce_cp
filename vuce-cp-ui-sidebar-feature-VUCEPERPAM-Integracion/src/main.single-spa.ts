import { NgZone } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router, NavigationStart } from "@angular/router";

import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from "single-spa-angular";

import { AppModule } from "./app/app.module";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";
/**
 * Configuración y ciclo de vida de la aplicación Angular para integrarla con Single-SPA.
 */
const lifecycles = singleSpaAngular({
  /**
   * Función de bootstrap que inicializa la aplicación Angular.
   * @param singleSpaProps - Propiedades específicas de Single-SPA.
   * @returns {Promise<NgModuleRef<AppModule>>} - Promesa que resuelve con el módulo de la aplicación Angular.
   */
  bootstrapFunction: (singleSpaProps) => {
    // Actualiza el Subject con las propiedades de Single-SPA.
    singleSpaPropsSubject.next(singleSpaProps);
  // Inicia la plataforma de Angular con los proveedores adicionales de Single-SPA y arranca el módulo de la aplicación.
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      AppModule
    );
  },
   // Plantilla para el componente raíz de la aplicación Angular.
  template: "<vuce-sidebar />",
  // Proveedor del Router de Angular para gestionar la navegación.
  Router,
  // Evento de navegación para detectar el inicio de una navegación.
  NavigationStart,
  // Zona de Angular para la detección de cambios.
  NgZone,
});
// Exporta las funciones de ciclo de vida de la aplicación para que Single-SPA las utilice.
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
