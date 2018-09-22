import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private location: Location) {
    this.createRegisterForm()
   }

  ngOnInit() {
  }
  createRegisterForm(){
    this.formRegister = this.formBuilder.group({
      email:['',Validators.compose([Validators.required, Validators.email])], password:['',Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onRegister(){
    this.authService.signup(this.formRegister.value.email, this.formRegister.value.password)
    .then(()=>{
    //Registro exitoso, celebremos esto!
      this.router.navigate(['/muro']);
    })
    .catch(()=>{
    //Algo salió mal, avisemos mejor para que reintente
    this.snackBar.open('Error de registro, trata otra vez'
                        ,null/*No necesitamos botón en el aviso*/
                        ,{
                          duration : 3000
                        });
    });
  }
  onbackLogin(){
    this.location.back();
  }

}
