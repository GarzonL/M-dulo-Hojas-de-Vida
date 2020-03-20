import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/entidades/jugador';
import { Respuesta } from 'src/app/entidades/respuesta';

@Component({
  selector: 'app-drendimiento',
  templateUrl: './drendimiento.component.html',
  styleUrls: ['./drendimiento.component.scss']
})
export class DrendimientoComponent implements OnInit {

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
}
