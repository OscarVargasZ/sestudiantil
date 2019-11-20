import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routecomponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {LoggedModule} from 'src/app/logged/logged.module'
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("726702070483-avrsebkg1d6i7ke2958gq3818ur505q3.apps.googleusercontent.com")
  }
]);
@NgModule({
  declarations: [
    AppComponent, routecomponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    LoggedModule,
    AppRoutingModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function provideConfig() {
  return config;
}
