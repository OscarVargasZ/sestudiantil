import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CuerpoComponent} from 'src/app/cuerpo/cuerpo.component';
import {AlumnosComponent} from 'src/app/cuerpo/alumnos/alumnos.component';
import {ListasComponent} from 'src/app/cuerpo/listas/listas.component';


const routes: Routes = [
  { path: '', 
    children:[
      {path: 'alumnos', component:AlumnosComponent}
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuerpoRoutingModule { }
export const routecomponent = [
  CuerpoComponent,AlumnosComponent,ListasComponent]

