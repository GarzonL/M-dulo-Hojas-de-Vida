import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/entidades/jugador';
import { Respuesta } from 'src/app/entidades/respuesta';

@Component({
  selector: 'app-dfisicos',
  templateUrl: './dfisicos.component.html',
  styleUrls: ['./dfisicos.component.scss']
})
export class DfisicosComponent implements OnInit {

	nombre: string;
	apellidos: string;
	correo: string; 
	direccion: string;
	telefono: string;
	idusuario: number;

  mirespuesta: Respuesta;
  
  mijugador: Jugador;

  constructor(private router: Router) { }

  ngOnInit() {
  }

volver():void{
	this.router.navigate(['inicio']);
}
consultar():void{
	this.router.navigate(['consultar']);
}

agregar() {

    
    if (this.nombre === undefined || this.apellidos === undefined || this.correo || this.direccion || this.telefono || this.idusuario){
      alert('Los datos estan vacios');
      return ;
    }
    const x: Promise<Respuesta> =  this.servicio.agregar(this.nombre, this.apellidos, this.correo, this.direccion, this.telefono, this.idusuario);

    x.then((value: Respuesta) => {
      this.mirespuesta = value;
      if  (this.mirespuesta.codigo === 1){
        this.mijugador =  this.mirespuesta.info;
        this.servicio.jugador = this.mipersona;

        //this.router.navigate(['datos']);        

      }else {
        alert (' * * * * * * * * * *  *El usuario no existe');
      }

    });

    
  }
}
