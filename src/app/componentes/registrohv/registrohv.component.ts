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
	apellido: string;
	correo: string; 
	direccion: string;
	telefono: number;
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
  
  consultar(): void {
    this.router.navigate(['consultar']);    
  }
  
  agregar() {

    
    //if (this.nombre === undefined || this.apellidos === undefined || this.correo === undefined || this.direccion === undefined || this.telefono === undefined || this.id === undefined){
      //alert('Los datos estan vacios');
      //return ;
    //}
    const x: Promise<Respuesta> =  this.servicio.agregar(this.nombre, this.apellido, this.correo, this.direccion, this.telefono, this.id);
	alert('Usuario registrado');
    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        this.mijugador =  this.mirespuesta.info;
        this.servicio.jugador = this.mijugador;        

      }else {
        alert (' * * * * * * * * * *  *El usuario no existe');
      }

    });

    this.router.navigate(['datosF']);
  }
}
