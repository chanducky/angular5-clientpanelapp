import { Injectable } from "@angular/core";
import { Router,CanActivate } from "@angular/router";
import { SettingsService } from "../services/settings.service";


@Injectable()
export class RegisterGaurd implements CanActivate  {
    
    constructor(
        private settingsService:SettingsService,
        private router:Router
    ){

    }

    canActivate():boolean{
            
            if(! this.settingsService.getSettings().allowRegistraion){
                this.router.navigate(['/login']);
                return false; 
            }else{
                return true;
            }
        
    }

}