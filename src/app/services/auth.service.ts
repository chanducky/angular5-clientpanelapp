import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";


@Injectable()
export class AuthService {

  constructor(
    private angularFireAuth:AngularFireAuth
  ) { }

  login(email:string,password:string){
    let promise = new Promise((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email,password).then(userData=>resolve(userData),err=>reject(err));
    });
    return promise;
  }

  getAuth(){
    return this.angularFireAuth.authState.map(auth=>auth);
  }

  onLogout(){
    this.angularFireAuth.auth.signOut();
  }

  register(email:string,password:string){
    let promise = new Promise((resolve, reject) => {
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password).then(userData=>resolve(userData),err=>reject(err));
    });
    return promise;
  }
}
