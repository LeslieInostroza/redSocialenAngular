import { Component, OnInit } from '@angular/core';
import { DataImgPerfilService } from '../data-img-perfil.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil-feed',
  templateUrl: './perfil-feed.component.html',
  styleUrls: ['./perfil-feed.component.css']
})
export class PerfilFeedComponent implements OnInit {

  images:any;

  constructor( private dataImgPerfilService: DataImgPerfilService, public authService: AuthService,  private router: Router, db: AngularFirestore, public afAuth: AngularFireAuth) { 
    this.dataImgPerfilService.postImage().subscribe(image => {
      this.images = image;
      console.log(this.images);      
    });  
  }

  ngOnInit() {
  }

  eliminar(image){
    this.dataImgPerfilService.deleteImage(image);
  }

}
