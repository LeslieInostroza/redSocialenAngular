import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RedSocialLoginComponent } from './red-social-login/red-social-login.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginFacebookGoogleComponent } from './login-facebook-google/login-facebook-google.component';
import { RegistroLoginComponent } from './registro-login/registro-login.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './google-login/google-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RedSocialLoginComponent,
    PaginaMuroComponent,
    PaginaPerfilComponent,
    FormLoginComponent,
    LoginFacebookGoogleComponent,
    RegistroLoginComponent,
    FacebookLoginComponent,
    GoogleLoginComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
