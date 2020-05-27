import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/entidades/jugador';
import { Respuesta } from 'src/app/entidades/respuesta';
import { OperacionesService } from 'src/app/servicios/operaciones.service';

@Component({
  selector: 'app-dfisicos',
  templateUrl: './dfisicos.component.html',
  styleUrls: ['./dfisicos.component.scss']
})
export class DfisicosComponent implements OnInit {

	peso: string;
	estatura: string;
	comentario: string;
	
	 mirespuesta: Respuesta;
  
  mijugador: Jugador;

  constructor(private router: Router, private servicio: OperacionesService) { }

  ngOnInit() {
  }

volver():void{
	this.router.navigate(['inicio']);
}
consultar():void{
	this.router.navigate(['consultar']);
}

agregarF() {

    
    //if (this.nombre === undefined || this.apellidos === undefined || this.correo === undefined || this.direccion === undefined || this.telefono === undefined || this.id === undefined){
      //alert('Los datos estan vacios');
      //return ;
    //}
	this.router.navigate(['datosR']);
    const x: Promise<Respuesta> =  this.servicio.agregarFisicos(this.peso, this.estatura, this.comentario);
	
    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        this.mijugador =  this.mirespuesta.info;
        this.servicio.jugador = this.mijugador;        

      }else {
        
      }

    });
	
}

}
