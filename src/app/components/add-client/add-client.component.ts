import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/Client";

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
  constructor() { }

  ngOnInit() {
   
  }

}
