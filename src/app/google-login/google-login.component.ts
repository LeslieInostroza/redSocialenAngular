import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor( public authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
   tryGoogleLogin(){
     this.authService.loginGoogle()
     .then(response => {
       this.router.navigate(['/muro']);
     })
   }
}
