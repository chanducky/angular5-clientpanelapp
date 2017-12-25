import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";
import { ClientService } from "../../services/client.service";
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  id:string;
  client:Client;
  hasbalance:boolean=false;

  constructor(
    private route:ActivatedRoute,
    private clientService:ClientService
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log('id='+this.id);
    this.clientService.getClient(this.id).subscribe(client=>{
      this.client=client;
      if(this.client.balance >0){
        this.hasbalance=true;
      }
      console.log(this.client);
    });
  }

}
