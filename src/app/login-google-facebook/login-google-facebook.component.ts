import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-google-facebook',
  templateUrl: './login-google-facebook.component.html',
  styleUrls: ['./login-google-facebook.component.css']
})
export class LoginGoogleFacebookComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  tryGoogleLogin(){
    this.authService.loginGoogle()
    .then(response => {
      this.router.navigate(['/muro']);
    })
  }

  tryLoginFAcebook(){
   this.authService.loginFacebook()
   .then(response => {
     this.router.navigate(['/muro']);
   })
 }
}
