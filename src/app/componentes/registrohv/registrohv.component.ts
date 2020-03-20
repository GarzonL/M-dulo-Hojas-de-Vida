import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrohv',
  templateUrl: './registrohv.component.html',
  styleUrls: ['./registrohv.component.scss']
})
export class RegistrohvComponent implements OnInit {

  constructor(private router: Router) { }

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
}
