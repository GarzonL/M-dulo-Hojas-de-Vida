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


  constructor(private router: Router, private servicio: OperacionesService) { }

  ngOnInit() {
  }

volver():void{
	this.router.navigate(['inicio']);
}
consultar():void{
	this.router.navigate(['consultar']);
}

}
