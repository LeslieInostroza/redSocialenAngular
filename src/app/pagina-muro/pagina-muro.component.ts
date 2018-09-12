import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-muro',
  templateUrl: './pagina-muro.component.html',
  styleUrls: ['./pagina-muro.component.css']
})
export class PaginaMuroComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  goToProfile(){
    this.router.navigate(['/perfil']);
  }
}
