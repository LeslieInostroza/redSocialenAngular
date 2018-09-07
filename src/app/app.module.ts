import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RedSocialLoginComponent } from './red-social-login/red-social-login.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    RedSocialLoginComponent,
    PaginaMuroComponent,
    PaginaPerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
