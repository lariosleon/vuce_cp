import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RolService } from '../services/rol-service.service';
import { DatosServiceService } from '../services/datos-service.services';

//Modulos
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    //Apis
    RolService
  ,DatosServiceService]
})
export class SharedModule { }