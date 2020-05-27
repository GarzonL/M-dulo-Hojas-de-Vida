import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Respuesta } from 'src/app/entidades/respuesta';
import { Jugador } from 'src/app/entidades/jugador';

@Component({
  selector: 'app-consultarhv',
  templateUrl: './consultarhv.component.html',
  styleUrls: ['./consultarhv.component.scss']
})
export class ConsultarhvComponent implements OnInit {

	jugadores: Jugador[];
	miRespuesta: Respuesta;

  constructor(private router: Router, private servicio:OperacionesService) { 
  this.cargarDatos();}

  ngOnInit() {
  }
volver():void{
	this.router.navigate(['inicio']);
}
consultar():void{
	this.router.navigate(['consultar']);
}

cargarDatos():void{
	const valor=this.servicio.consultar();
	valor.then(
	(value: Respuesta) =>{
		this.miRespuesta=value;
		this.jugadores = this.miRespuesta.jugadores;
		/*if(this.miRespuesta.codigo === 1){
			
		}else{
			alert('No obtuvo datos');
		}*/
	}
	);
	
}


}
