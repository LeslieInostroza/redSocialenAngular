import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string) {
    return this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password);
  }
  logout(){
    return this.firebaseAuth.auth
      .signOut();
  }
}
