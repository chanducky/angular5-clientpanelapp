import { Component, OnInit } from '@angular/core';
import { Settings } from "../../models/Setting";
import { SettingsService } from "../../services/settings.service";
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;
  constructor(
    private router:Router,
    private flashMessagesService:FlashMessagesService,
    private settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.settings=this.settingsService.getSettings();

  }

  onSubmit(){
    this.settingsService.saveSettings(this.settings);
    this.flashMessagesService.show('Setting saved successfully.',{cssClass:'alert-success',timeout:4000});
    this.router.navigate(['/']);
  }

 
}
