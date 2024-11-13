/**
 * @description Interface para el modelo de menús.
 * Esta interfaz define la estructura de un objeto que representa los menús.
 */
export interface MenuModel {
  id: string;                   // Identificador único del menú
  nombre: string;               // Nombre del menú
  ruta: string;                 // Ruta del menú
  icono: string;                // Icono del menú
  submenu: boolean;             // Indicador de si el menú tiene submenús
  active?: boolean;             // Indicador opcional de si el menú está activo
  permiso: boolean;             // Indicador de si el usuario tiene permiso para ver el menú
  submenuListado?: SubMenuModel[];  // Lista opcional de submenús
}

/**
 * @description Interface para el modelo de submenús.
 * Esta interfaz define la estructura de un objeto que representa los submenús.
 */
export interface SubMenuModel {
  nombre: string;   // Nombre del submenú
  ruta: string;     // Ruta del submenú
}

/**
 * @description Enum de iconos para los menús y submenús.
 * Este enum define los diferentes iconos disponibles, asignando un valor de texto para cada icono.
 */
export enum ICONOS  {
  INICIO = "inicio",
  BUQUE = "buque",
  KEY = "key",
  BUQUE2 = "buque2",
  HEALTH = "health",
  HELMET = "helmet",
  ANCHOR = "anchor",
  QUESTION = "question",
  REPORT = "report",
  CASH = "cash",
  LAPTOP = "laptop",
}

/**
 * @description Interface para el modelo de permisos.
 * Esta interfaz define la estructura de un objeto que representa los permisos.
 */
export interface Permiso {
  id: string;      // Identificador único del permiso
  activo: boolean; // Indicador de si el permiso está activo
}