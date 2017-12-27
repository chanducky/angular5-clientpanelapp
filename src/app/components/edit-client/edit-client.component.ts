import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";
import { FlashMessagesService } from "angular2-flash-messages";
import {Router,ActivatedRoute} from '@angular/router';
import {  ClientService} from "../../services/client.service";
import {  SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  disableBalanceOnEdit:boolean=false;
  client:Client={
    firstname:'',
    lastName:'',
    email:'',
    balance:0
  }

  constructor(
    private flashMessagesService:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute,
    private clientService:ClientService,
    private settingsService:SettingsService
  ) { }

  ngOnInit() {
    this.disableBalanceOnEdit=this.settingsService.getSettings().disableBalanceOnEdit;
    this.id=this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client=>{
      this.client=client;
    });
  }

  onSubmit({value,valid}:{value:Client,valid:boolean}){
    if(this.disableBalanceOnEdit){
      value.balance=0;
    }
    if(! valid){
      this.flashMessagesService.show('Please fill in all fields.',{cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['edit-client']);
    }else{
      this.clientService.updateClient(this.id,value);

      this.flashMessagesService.show('Client updated successfully.',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/client/'+this.id]);
    }
  }


}
