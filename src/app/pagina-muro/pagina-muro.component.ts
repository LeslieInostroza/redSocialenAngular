import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pagina-muro',
  templateUrl: './pagina-muro.component.html',
  styleUrls: ['./pagina-muro.component.css']
})
export class PaginaMuroComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private authService: AuthService, private router: Router, db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {
  }
  goToProfile(){
    this.router.navigate(['/perfil']);
  }
}
