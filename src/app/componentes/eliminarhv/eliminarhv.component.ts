import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionesService } from 'src/app/servicios/operaciones.service';
import { Respuesta } from 'src/app/entidades/respuesta';
import { Jugador } from 'src/app/entidades/jugador';


@Component({
  selector: 'app-eliminarhv',
  templateUrl: './eliminarhv.component.html',
  styleUrls: ['./eliminarhv.component.scss']
})
export class EliminarhvComponent implements OnInit {

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
