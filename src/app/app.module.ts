import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { AdditionComponent } from './addition/addition.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { CompteurComponent } from './compteur/compteur.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnagesComponent,
    AdditionComponent,
    PersonnageDetailComponent,
    ContactComponent,
    CompteurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
