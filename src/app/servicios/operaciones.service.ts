import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Jugador } from "../entidades/jugador"
import { Respuesta } from '../entidades/respuesta';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
	
	rutaservicio: string = 'http://192.168.0.20:8080/ServAuten/app/operacion/agregar';
  rutaservicioversion: string = 'http://192.168.0.20:8080/ServAuten/app/operacion/agregar';
  

  jugador:Jugador;

  constructor(private http: HttpClient) { }
  
  agregar(nombre:string, apellidos: string, correo:string, direccion:string, telefono:string, idusuario:int){
	  const info = {
    "nombre":nombre,
    "apellidos":apellidos,
	"correo":correo,
	"direccion":direccion,
	"telefono":telefono,
	"idusuario":idusuario
   }
   return this.http.post<Respuesta>(`${this.rutaservicio}`, info).toPromise();
}
