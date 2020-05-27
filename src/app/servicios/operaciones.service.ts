import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Jugador } from "../entidades/jugador";
import { Respuesta } from '../entidades/respuesta';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
	
	registrarBasicos: string = 'http://192.168.0.17:8080/ServAuten/app/operacion/agregarB';
	registrarFisicos: string = 'http://192.168.0.17:8080/ServAuten/app/operacion/agregarF';
	registrarRendimiento: string = 'http://192.168.0.17:8080/ServAuten/app/operacion/agregarR';
	rutaconsultar: string ='http://192.168.0.17:8080/ServAuten/app/operacion/consultar';

  jugador:Jugador;

  constructor(private http: HttpClient) { }
  
  consultar(): Promise<Respuesta>{
	  return this.http.get<Respuesta>(`${this.rutaconsultar}`).toPromise();
  }
  
 agregar(nombre:string, apellido: string, correo:string, direccion:string, telefono:number, id:number): Promise<Respuesta>{
	  const info = {
    "nombre":nombre,
    "apellido":apellido,
	"correo":correo,
	"direccion":direccion,
	"telefono":telefono,
	"id":id
   }
   return this.http.post<Respuesta>(`${this.registrarBasicos}`, info).toPromise();
}
agregarFisicos(peso: string, estatura: string, comentario:string): Promise<Respuesta>{
	  const info = {
    "peso":peso,
	"estatura":estatura,
	"comentario":comentario
   }
   return this.http.post<Respuesta>(`${this.registrarFisicos}`, info).toPromise();
}

agregarRendimiento(rebotes: number, asistencias: number, pases: number, robos: number, paradas: number, libresAnotados:number, tirosCampoAnotados: number, triplesAnotados: number, puntosPartido: number): Promise<Respuesta>{
	  const info = {
    "rebotes":rebotes,
	"asistencias":asistencias,
	"pases":pases,
	"robos":robos,
	"paradas":paradas,
	"libresAnotados":libresAnotados,
	"tirosCampoAnotados":tirosCampoAnotados,
	"triplesAnotados":triplesAnotados,
	"puntosPartido":puntosPartido
   }
   return this.http.post<Respuesta>(`${this.registrarRendimiento}`, info).toPromise();
}
}
