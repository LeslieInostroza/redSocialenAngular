import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-red-social-login',
  templateUrl: './red-social-login.component.html',
  styleUrls: ['./red-social-login.component.css']
})
export class RedSocialLoginComponent implements OnInit {  
  redSocialLogin:FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private router: Router) {
    this.createRedSocialLogin();
  }

  ngOnInit() {
  }
  createRedSocialLogin() {
    this.redSocialLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }
  onRegister() {
    this.authService.signup(this.redSocialLogin.value.email, this.redSocialLogin.value.password)
      .then(() => {
        
        //Registro exitoso, celebremos esto!
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error de registro, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onLogin() {
    this.authService.login(this.redSocialLogin.value.email, this.redSocialLogin.value.password)
      .then(() => {
        //Login exitoso, así que celebramos con el usuario (?)
        this.router.navigate(['/muro']);
      })
      .catch(() => {
        //Algo salió mal, avisemos mejor para que reintente
        this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }
}
