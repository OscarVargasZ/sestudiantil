import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-barrasuperior',
  templateUrl: './barrasuperior.component.html',
  styleUrls: ['./barrasuperior.component.css']
})
export class BarrasuperiorComponent implements OnInit {
  @Output() enviar = new EventEmitter<boolean>();
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {}
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (!this.loggedIn) {
        this.router.navigate(['/']);
      }
    });
  }
  send(msg:boolean){
    this.enviar.emit(msg)
  }
  click(){
    this.send(true)
  }
}
