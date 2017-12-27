import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:String;
  showRegister:boolean;

  constructor(
    private authService:AuthService,
    private flashMessagesService:FlashMessagesService,
    private router:Router,
    private settingsService:SettingsService
  ) { }

  ngOnInit() {
   this.showRegister = this.settingsService.getSettings().allowRegistraion;
    this.authService.getAuth().subscribe(auth=>{
      
      if(auth){
        this.isLoggedIn=true;
        this.loggedInUser=auth.email;
      }else{
        this.isLoggedIn=false;
      }
    });
  }
  onLogout(){
    this.authService.onLogout();
    this.isLoggedIn=false;
    this.flashMessagesService.show('Your are logged out', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/login']);
  }




}
