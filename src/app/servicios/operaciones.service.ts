import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Jugador } from "../entidades/jugador";
import { Respuesta } from '../entidades/respuesta';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
	
	rutaservicio: string = 'http://192.168.0.20:8080/ServAuten/app/operacion/agregarB';
  rutaservicioversion: string = 'http://192.168.0.20:8080/ServAuten/app/operacion/agregarB';
  

  jugador:Jugador;

  constructor(private http: HttpClient) { }
  
  agregar(nombre:string, apellido: string, correo:string, direccion:string, telefono:number, id:number): Promise<Respuesta>{
	  const info = {
    "nombre":nombre,
    "apellido":apellido,
	"correo":correo,
	"direccion":direccion,
	"telefono":telefono,
	"id":id
   }
   return this.http.post<Respuesta>(`${this.rutaservicio}`, info).toPromise();
}
}
