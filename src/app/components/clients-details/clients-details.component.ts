import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";
import { ClientService } from "../../services/client.service";
import { Router,ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasBalance:boolean=false;
  updateBalanceFlag:boolean=false;

  constructor(
    private route:ActivatedRoute,
    private clientService:ClientService,
    private flashMessagesService:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log('id='+this.id);
    this.hasBalance=false;
    this.clientService.getClient(this.id).subscribe(client=>{
      this.client=client;
      if(this.client.balance >0){
        this.hasBalance=true;
      }
      console.log(this.client);
    });
  }

  updateBalance(id:string){
    this.clientService.updateClient(this.id,this.client);
    this.flashMessagesService.show('Balance updated successfully.',{cssClass:'alert-success',timeout:4000});
    this.router.navigate(['/client/'+this.id]);
  }

  onDelete(){
    if(confirm('Are you sure to delete.?')){
      
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client deleted successfully.',{cssClass:'alert-success',timeout:4000});
      this.router.navigate(['/']);
    }
   
  }
}
