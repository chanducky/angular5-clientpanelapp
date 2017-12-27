import { Injectable } from "@angular/core";
import {  AngularFireAuth } from "angularfire2/auth";
import { Router,CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate  {

    constructor(
        private router:Router,
        private   angularFireAuth:AngularFireAuth
    ){

    }

    canActivate():Observable<boolean>{
        return this.angularFireAuth.authState.map(auth=>{
            
            if(! auth){
                this.router.navigate(['/login']);
                return false; 
            }else{
                return true;
            }
        });
    }

}