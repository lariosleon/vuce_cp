import { Component, OnInit } from "@angular/core";
import { ICONOS, MenuModel } from "./models/menu.model";
import { MENU } from "./models/menu.constant";

@Component({
  selector: "vuce-sidebar",
  standalone: false,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent  implements OnInit {
  // Variables de clase
   permisos: any = localStorage.getItem("permiso"); // Obtiene los permisos del localStorage
  closeSidebar = false; // Controla el estado del sidebar
  listMenu: MenuModel[] = MENU; // Lista de menús
  listMenu2: MenuModel[] = []; // Lista de menús secundaria (no usada en este código)
  iconMenu = ICONOS; // Iconos para los menús

  // Método para cerrar el sidebar
  onCloseSidebar = () => {
    this.closeSidebar = !this.closeSidebar;
    this.onCloseSidebarDesktop();
    this.onCloseSidebarMobile();
  };
  
  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    const datosLocalStorage = localStorage.getItem('permiso');
    if (datosLocalStorage) {
        // Parsea los datos como un array de objetos
        const datosComoArray = JSON.parse(datosLocalStorage);
    
        // Mapea los datos al modelo Permiso
        const permisos = datosComoArray.map((dato:any) => ({
          id: dato.idRecurso.toString(),
          activo: dato.permisos.includes('R')
        }));
    
        // Actualiza MENU directamente
        for (const item of MENU) {
          const permisoCorrespondiente = permisos.find((permiso: { id: string; }) => permiso.id === item.id);
          if (permisoCorrespondiente) {
            item.permiso = permisoCorrespondiente.activo;
          }
        }
    
        console.log(MENU);
        // Ahora MENU tiene los datos actualizados
    }
  }

  // Método para abrir un submenú
  onOpenSubMenu = (menu: MenuModel) => {
    if (!this.closeSidebar) {
      if (!menu.active) {
        this.onCloseSubMenu();
        menu.active = true;
      } else {
        menu.active = false;
      }
    } else {
      this.closeSidebar = false;
      this.onCloseSidebarDesktop();
      this.onCloseSubMenu();
      menu.active = true;
    }
  };

  // Método para abrir un menú
  onOpenMenu = (menu: MenuModel) => {
		this.onCloseSubMenu();
    menu.active = true;
		if (this.closeSidebar) {
			this.closeSidebar = false;
      this.onCloseSidebarDesktop();
    }
	};

   // Método para cerrar todos los submenús
  onCloseSubMenu = () => {
    this.listMenu.forEach((item) => (item.active = false));
    const collapses = document.querySelectorAll(".submenu.collapse.show");
    collapses.forEach((collapse) => {
      collapse.classList.remove("show");
    });
  };

  // Método para cerrar el sidebar en versión de escritorio
  onCloseSidebarDesktop = () => {
    const main = document.querySelector(".main");
    if (main) main.classList.toggle("main--desktop");
  };

  // Método para cerrar el sidebar en versión móvil
  onCloseSidebarMobile = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.classList.remove("sidebar__open");
  };
}