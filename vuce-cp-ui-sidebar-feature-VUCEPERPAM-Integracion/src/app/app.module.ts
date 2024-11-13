import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { BuqueComponent } from "./components/buque/buque.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { Buque2Component } from "./components/buque2/buque2.component";
import { CashComponent } from "./components/cash/cash.component";
import { AnchorComponent } from "./components/anchor/anchor.component";
import { HealthComponent } from "./components/health/health.component";
import { KeyComponent } from "./components/key/key.component";
import { WspComponent } from "./components/wsp/wsp.component";
import { HelmetComponent } from "./components/helmet/helmet.component";
import { LaptopComponent } from "./components/laptop/laptop.component";
import { QuestionComponent } from "./components/question/question.component";
import { ReportComponent } from "./components/report/report.component";
import { CommonModule } from "@angular/common";

@NgModule({
  // Declaraciones de los componentes utilizados en la aplicación
  declarations: [
		AppComponent, 
		EmptyRouteComponent,
		BuqueComponent,
		InicioComponent,
		Buque2Component,
		CashComponent,
		AnchorComponent,
		HealthComponent,
		HelmetComponent,
		KeyComponent,
		LaptopComponent,
		QuestionComponent,
		ReportComponent,
		WspComponent
	],
   // Importaciones de los módulos necesarios
  imports: [
		CommonModule, // Módulo común de Angular
    BrowserModule,  // Módulo necesario para aplicaciones que se ejecutan en el navegador
    AppRoutingModule,// Módulo de enrutamiento de la aplicación
  ],
  // Proveedores de servicios (vacío en este caso)
  providers: [],
  // Componente de arranque de la aplicación
  bootstrap: [AppComponent],
})
// Exportación del módulo de la aplicación
export class AppModule {}
