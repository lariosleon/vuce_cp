import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {
  private urlSer: string = `${env.api_comunes_command}/apiTransversal/datos`;
  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get<any>(this.urlSer);
  }
}
