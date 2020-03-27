import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/entidades/jugador';
import { Respuesta } from 'src/app/entidades/respuesta';
import { OperacionesService } from 'src/app/servicios/operaciones.service';


@Component({
  selector: 'app-registrohv',
  templateUrl: './registrohv.component.html',
  styleUrls: ['./registrohv.component.scss']
})
export class RegistrohvComponent implements OnInit {

	nombre: string;
	apellidos: string;
	correo: string; 
	direccion: string;
	telefono: string;
	id: number;

  mirespuesta: Respuesta;
  
  mijugador: Jugador;

  constructor(private router: Router, private servicio: OperacionesService) { 
  
  }

  ngOnInit() {
  }

	datosF(): void {
    this.router.navigate(['datosF']);    
  }

datosR(): void {
    this.router.navigate(['datosR']);    
  }
  
  consultar(): void {
    this.router.navigate(['consultar']);    
  }
  
  agregar() {

    
    //if (this.nombre === undefined || this.apellidos === undefined || this.correo === undefined || this.direccion === undefined || this.telefono === undefined || this.id === undefined){
      //alert('Los datos estan vacios');
      //return ;
    //}
    const x: Promise<Respuesta> =  this.servicio.agregar(this.nombre, this.apellidos, this.correo, this.direccion, this.telefono, this.id);

    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        this.mijugador =  this.mirespuesta.info;
        this.servicio.jugador = this.mijugador;

        //this.router.navigate(['datos']);        

      }else {
        alert (' * * * * * * * * * *  *El usuario no existe');
      }

    });

    
  }
}
