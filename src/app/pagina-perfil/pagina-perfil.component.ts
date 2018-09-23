import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {
  mobileQuery:  MediaQueryList;

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router, db: AngularFirestore) { 

  }

  ngOnInit(){
  }
  onLogout() {
    this.authService.logout()
      .then(() => {
        //Logout exitoso, adios usuario!
        this.router.navigate(['/login']);
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  goToWall(){
    this.router.navigate(['/muro']);
  }

}
