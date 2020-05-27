import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/entidades/jugador';
import { Respuesta } from 'src/app/entidades/respuesta';
import { OperacionesService } from 'src/app/servicios/operaciones.service';


@Component({
  selector: 'app-drendimiento',
  templateUrl: './drendimiento.component.html',
  styleUrls: ['./drendimiento.component.scss']
})
export class DrendimientoComponent implements OnInit {
	
	rebotes: number;
	asistencias: number;
	pases: number;
	robos: number;
	paradas: number;
	libresAnotados: number;
	tirosCampoAnotados: number;
	triplesAnotados: number;
	puntosPartido: number;
	
  mirespuesta: Respuesta;
  
  mijugador: Jugador;

  constructor(private router: Router, private servicio: OperacionesService) { }

  ngOnInit() {
  }

consultar():void{
	this.router.navigate(['consultar']);
}

agregarR() {

    
    //if (this.nombre === undefined || this.apellidos === undefined || this.correo === undefined || this.direccion === undefined || this.telefono === undefined || this.id === undefined){
      //alert('Los datos estan vacios');
      //return ;
    //}
    const x: Promise<Respuesta> =  this.servicio.agregarRendimiento(this.rebotes, this.asistencias, this.pases, this.robos, this.paradas, this.libresAnotados, this.tirosCampoAnotados, this.triplesAnotados, this.puntosPartido);
	
    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        this.mijugador =  this.mirespuesta.info;
        this.servicio.jugador = this.mijugador;        

      }else {
        
      }

    });

    this.router.navigate(['inicio']);
  }
}
