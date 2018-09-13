import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RedSocialLoginComponent } from './red-social-login/red-social-login.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// firebase angularfire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { LoginGoogleFacebookComponent } from './login-google-facebook/login-google-facebook.component';

const appRoutes: Routes = [
  {
    path:'',
    component: RedSocialLoginComponent
  },
  {
    path:'muro',
    component: PaginaMuroComponent
  },
  {
    path:'perfil',
    component: PaginaPerfilComponent
  },
  {
    path:'login',
    component: RedSocialLoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RedSocialLoginComponent,
    PaginaMuroComponent,
    PaginaPerfilComponent,
    FormLoginComponent,
    LoginGoogleFacebookComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
