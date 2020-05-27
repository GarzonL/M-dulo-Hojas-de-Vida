import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrohvComponent } from './componentes/registrohv/registrohv.component';
import { DrendimientoComponent } from './componentes/drendimiento/drendimiento.component';
import { DfisicosComponent } from './componentes/dfisicos/dfisicos.component';
import { ConsultarhvComponent } from './componentes/consultarhv/consultarhv.component';
import { Respuesta } from './entidades/respuesta';
import { EliminarhvComponent } from './componentes/eliminarhv/eliminarhv.component';
import { OperacionesService } from 'src/app/servicios/operaciones.service';


//PrimeNG
import {TableModule} from 'primeng/table';

const appRoutes : Routes = [
  {path: '', component : RegistrohvComponent},
  {path: 'inicio', component : RegistrohvComponent},
  {path: 'datosF', component : DfisicosComponent},
  {path: 'consultar', component : ConsultarhvComponent},
  {path: 'datosR', component : DrendimientoComponent},
  {path: 'eliminar', component : EliminarhvComponent}]

@NgModule({
  declarations: [
    AppComponent,
    RegistrohvComponent,
    DrendimientoComponent,
    DfisicosComponent,
    ConsultarhvComponent,
    EliminarhvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	TableModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [OperacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
