import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  //Uri de apis
  private urlSer: string = `${env.api_comunes_command}/apiTransversal/rol`;

  constructor(private http: HttpClient) {
    //vacio
  }

  //Obtener rol de usuario
  getData(): Observable<any> {
    //obtener rol
    return this.http.get<any>(this.urlSer);
  }

}