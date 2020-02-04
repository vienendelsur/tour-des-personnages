import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonnagesComponent } from './personnages/personnages.component';
import { ContactComponent } from './contact/contact.component';
import { AdditionComponent } from './addition/addition.component';
import { CompteurComponent } from './compteur/compteur.component';



const routes: Routes = [
  { path: '', redirectTo: '/personnages', pathMatch: 'full'},
  { path:  'personnages', component: PersonnagesComponent },
  { path:  'contact', component: ContactComponent },
  { path: 'addition', component: AdditionComponent},
  { path: 'compteur', component: CompteurComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
