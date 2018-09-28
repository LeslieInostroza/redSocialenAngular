import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { DataImgPerfilService } from '../data-img-perfil.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {
  /*profileUrl: Observable<string | null>;
  mobileQuery:  MediaQueryList;
  items:any;
  */
 @Input() photoUrl: string;
 @Input() users: string;
  item: any={
    photoUrl: '',
    users:''
  }
  
  constructor(public authService: AuthService, private snackBar: MatSnackBar, private router: Router, db: AngularFirestore, private dataservice: DataService, private dataimageservice: DataImgPerfilService,public afAuth: AngularFireAuth, private database:AngularFireDatabase ) { 
    /*this.dataservice.postItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
    })*/
  }

  /*eliminar(item){
    this.dataservice.deleteItem(item);
  }*/

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
