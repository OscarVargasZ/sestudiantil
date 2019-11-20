import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent implements OnInit {

  @Input() on: boolean;
  public profesor: boolean = true;
  public admin: boolean = false;
  public psicologo: boolean = false;
  public adminpsicologo: boolean = false;


  public alumnos: boolean = false;
  public reuniones: boolean = false;
  public alumnosn: boolean = false;
  public derivaciones:boolean = false;
  constructor() {

  }

  ngOnInit() {
  }

  //#region profesor
  alumnoscambia() {
    if (this.alumnos == true) {
      this.alumnos = false
    }
    else {
      this.alumnos = true
    }
  }
  reunionescambia() {
    if (this.reuniones == true) {
      this.reuniones = false
    }
    else {
      this.reuniones = true
    }
  }
  derivacionescambia() {
    if (this.derivaciones == true) {
      this.derivaciones = false
    }
    else {
      this.derivaciones = true
    }
  }
  //#endregion

  //#region admin
  alumnosncambia() {
    if (this.alumnosn == true) {
      this.alumnosn = false
    }
    else {
      this.alumnosn = true
    }
  }
  //#endregion

  //#region cambios
  profesoron() {
    this.profesor = true;
    this.admin = false;
    this.psicologo = false;
    this.adminpsicologo = false;
  }
  adminon() {
    this.profesor = false;
    this.admin = this.on;
    this.psicologo = false;
    this.adminpsicologo = false;
  }
  psicologoon() {
    this.profesor = false;
    this.admin = false;
    this.psicologo = true;
    this.adminpsicologo = false;
  }
  adminpsicologoon() {
    this.profesor = false;
    this.admin = false;
    this.psicologo = false;
    this.adminpsicologo = true;
  }
  //#endregion
}
