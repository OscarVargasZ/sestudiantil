import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CuerpoRoutingModule,routecomponent} from 'src/app/cuerpo/cuerpo-routing.module';
import { ListasComponent } from './listas/listas.component';
import { AlumnosComponent } from './alumnos/alumnos.component';



@NgModule({
  declarations: [routecomponent, ListasComponent, AlumnosComponent],
  imports: [
    CommonModule,
    CuerpoRoutingModule
  ]
})
export class CuerpoModule { }
