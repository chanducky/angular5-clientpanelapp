import { Injectable } from '@angular/core';
import { Settings } from "../models/Setting";

@Injectable()
export class SettingsService {

  settings:Settings={
    allowRegistraion:true,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }

  constructor() { 
    if(localStorage.getItem('settings')!=null){
      this.settings=JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(){
    return this.settings;
  }

  saveSettings(settings:Settings){
    localStorage.setItem('settings',JSON.stringify(settings));
  }
}
