import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { FlashMessagesModule } from "angular2-flash-messages";
import { FlashMessagesService } from "angular2-flash-messages";


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule,AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

import { ClientService } from "./services/client.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.gaurd";
import { SettingsService } from "./services/settings.service";
import { RegisterGaurd } from "./guards/register.gaurd";

// creates routes
const appRoutes = [
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[RegisterGaurd]},
  {path:'login',component:LoginComponent},
  {path:'add-client',component:AddClientComponent,canActivate:[AuthGuard]},
  {path:'client/:id',component:ClientsDetailsComponent,canActivate:[AuthGuard]},
  {path:'edit-client/:id',component:EditClientComponent,canActivate:[AuthGuard]},
  {path:'settings',component:SettingsComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase,'clientpanel'),
    AngularFireAuthModule,
    FormsModule,FlashMessagesModule
  ],
  providers: [
    AngularFireDatabase,AngularFireDatabaseModule,ClientService,
    FlashMessagesService,AuthService,AuthGuard,SettingsService,
    RegisterGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
