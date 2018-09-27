import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RedSocialLoginComponent } from './red-social-login/red-social-login.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';
import { PaginaPerfilComponent } from './pagina-perfil/pagina-perfil.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { MessageFeedComponent } from './message-feed/message-feed.component';
import { MessageFormComponent } from './message-form/message-form.component'
import { LoginGoogleFacebookComponent } from './login-google-facebook/login-google-facebook.component'

import { MatInputModule } from '@angular/material/input';
import { PostComponent } from './post/post.component';
// firebase angularfire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { SubmenuComponent } from './submenu/submenu.component'
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PerfilFeedComponent } from './perfil-feed/perfil-feed.component';
import { DataImgPerfilService } from './data-img-perfil.service';


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
  },
  {
    path:'registro',
    component: RegisterComponent
  },{
    path:'editarPerfil',
    component: EditarPerfilComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    RedSocialLoginComponent,
    PaginaMuroComponent,
    PaginaPerfilComponent,
    FormLoginComponent,
    MenuComponent,
    MessageFeedComponent,
    MessageFormComponent,
    LoginGoogleFacebookComponent,
    RegisterComponent,  
    PostComponent,
    SubmenuComponent,  
    PostComponent, 
    FooterMenuComponent,
    EditarPerfilComponent,
    MessageComponent,
    PerfilFeedComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,    
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    FormsModule
  ],
  providers: [AuthService, DataService, DataImgPerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
