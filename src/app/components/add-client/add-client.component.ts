import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";
import { FlashMessagesService } from "angular2-flash-messages";
import {Router} from '@angular/router';
import {  ClientService} from "../../services/client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  disableBalanceOnAdd:boolean=false;

  client:Client={
    firstname:'',
    lastName:'',
    email:'',
    balance:0
  }
  constructor(
    private flashMessagesService:FlashMessagesService,
    private router:Router,
    private clientService:ClientService
  ) { }

  ngOnInit() {
   
  }

  onSubmit({value,valid}:{value:Client,valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance=0;
    }
    if(! valid){
      this.flashMessagesService.show('Please fill in all fields.',{cssClass:'alert-danger',timeout:4000});
      this.router.navigate(['add-client']);
    }else{
      this.clientService.addClient(value);

      this.flashMessagesService.show('Client saved successfully.',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/']);
    }
  }

}
