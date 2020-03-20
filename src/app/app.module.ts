import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrohvComponent } from './componentes/registrohv/registrohv.component';
import { DrendimientoComponent } from './componentes/drendimiento/drendimiento.component';
import { DfisicosComponent } from './componentes/dfisicos/dfisicos.component';
import { ConsultarhvComponent } from './componentes/consultarhv/consultarhv.component';
import { RespuestaComponent } from './entidades/respuesta/respuesta.component';

const appRoutes : Routes = [
  {path: '', component : RegistrohvComponent},
  {path: 'inicio', component : RegistrohvComponent},
  {path: 'datosF', component : DfisicosComponent},
  {path: 'consultar', component : ConsultarhvComponent},
  {path: 'datosR', component : DrendimientoComponent}]

@NgModule({
  declarations: [
    AppComponent,
    RegistrohvComponent,
    DrendimientoComponent,
    DfisicosComponent,
    ConsultarhvComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
