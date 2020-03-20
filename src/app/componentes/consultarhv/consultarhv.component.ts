import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultarhv',
  templateUrl: './consultarhv.component.html',
  styleUrls: ['./consultarhv.component.scss']
})
export class ConsultarhvComponent implements OnInit {

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
