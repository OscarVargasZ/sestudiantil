import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  on: boolean = false;
  recivo:boolean = false;

  constructor() { }
  cambiaron(confirmation: boolean){
    this.recivo = confirmation;
    if(this.on == true){
      this.on = false
    }
    else{
      this.on = true
    }
  }
  ngOnInit() {
  }
}
