import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
// Definición de las rutas de la aplicación
const routes: Routes = [
   // Ruta comodín para capturar cualquier ruta no definida y mostrar el EmptyRouteComponent
	{ path: "**", component: EmptyRouteComponent }
];
// Decorador NgModule para configurar el módulo de enrutamiento
@NgModule({
  // Importa RouterModule y configura las rutas usando forRoot
  imports: [RouterModule.forRoot(routes)],
  // Exporta RouterModule para que esté disponible en toda la aplicación
  exports: [RouterModule],
  // Proveedor para definir la base de la URL de la aplicación
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
// Exporta el módulo de enrutamiento para que pueda ser importado en el módulo principal de la aplicación
export class AppRoutingModule {}
