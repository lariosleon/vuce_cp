// Importaciones necesarias
import { ICONOS, MenuModel } from "./menu.model";

// Constante MENU que contiene la estructura del menú
export const MENU: MenuModel[] = [
  {
    id: "1", // Identificador único del elemento del menú
    nombre: "Inicio", // Nombre del elemento del menú
    ruta: "/cp2", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.INICIO, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
  {
    id: "", // Identificador único del elemento del menú
    nombre: "Asignación de trámites", // Nombre del elemento del menú
    ruta: "/cp2/asignarexpediente", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.REPORT, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
  {
    id: "6", // Identificador único del elemento del menú
    nombre: "Gestión de la Nave", // Nombre del elemento del menú
    ruta: "", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.BUQUE2, // Icono asociado al elemento del menú
    submenu: true, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
    submenuListado: [
      {
        nombre: "Ficha técnica", // Nombre del subelemento del menú
        ruta: "/cp2/fichatecnica", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Gestión del DUE", // Nombre del subelemento del menú
        ruta: "/cp2/gestionduenave", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Cambio de agencia", // Nombre del subelemento del menú
        ruta: "/cp2/cambioagencia", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Agencia cambio tripulación", // Nombre del subelemento del menú
        ruta: "/cp2/cambioagenciatripulante", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Control de arribo forzoso", // Nombre del subelemento del menú
        ruta: "/cp2/arriboforzoso", // Ruta a la que apunta el subelemento del menú
      },
    ],
  },
  {
    id: "28", // Identificador único del elemento del menú
    nombre: "Control Sanitario", // Nombre del elemento del menú
    ruta: "", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.HEALTH, // Icono asociado al elemento del menú
    submenu: true, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
    submenuListado: [
      {
        nombre: "Inspecciones sanitarias", // Nombre del subelemento del menú
        ruta: "/cp2/fichasanitaria", // Ruta a la que apunta el subelemento del menú
      },
    ],
  },
  {
    id: "31", // Identificador único del elemento del menú
    nombre: "Gestión de Puertos", // Nombre del elemento del menú
    ruta: "/cp2/puerto", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.HELMET, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
  {
    id: "32", // Identificador único del elemento del menú
    nombre: "Impedimento de Zarpe", // Nombre del elemento del menú
    ruta: "/cp2/impedimentozarpe", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.ANCHOR, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
  {
    id: "8", // Identificador único del elemento del menú
    nombre: "Consultas", // Nombre del elemento del menú
    ruta: "", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.QUESTION, // Icono asociado al elemento del menú
    submenu: true, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
    submenuListado: [
      {
        nombre: "Supervisión del DUE", // Nombre del subelemento del menú
        ruta: "/cp2/supervisiondue", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Programación Arribo y Zarpe", // Nombre del subelemento del menú
        ruta: "/cp2/arriboyzarpe", // Ruta a la que apunta el subelemento del menú
      },
    ],
  },
  {
    id: "9", // Identificador único del elemento del menú
    nombre: "Reportes", // Nombre del elemento del menú
    ruta: "", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.REPORT, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
  {
    id: "54", // Identificador único del elemento del menú
    nombre: "Tramites y Pagos", // Nombre del elemento del menú
    ruta: "/", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.CASH, // Icono asociado al elemento del menú
    submenu: true, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
    submenuListado: [
      {
        nombre: "Listado de trámites y rectificaciones", // Nombre del subelemento del menú
        ruta: "/cp2/tramiteyrectificacion", // Ruta a la que apunta el subelemento del menú
      },
      {
        nombre: "Autorizar reasignación CPB", // Nombre del subelemento del menú
        ruta: "/cp2/reasignarcpb", // Ruta a la que apunta el subelemento del menú
      },
    ],
  },
  {
    id: "62", // Identificador único del elemento del menú
    nombre: "Expediente Electrónico", // Nombre del elemento del menú
    ruta: "", // Ruta a la que apunta el elemento del menú
    icono: ICONOS.LAPTOP, // Icono asociado al elemento del menú
    submenu: false, // Indica si el elemento tiene submenú
    active: false, // Indica si el elemento está activo
    permiso: false, // Indica si el usuario tiene permiso para acceder al elemento
  },
];