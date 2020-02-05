import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {


  // c'est toujours avant le constructor que je mets les propriétés de mon composant 

  // propriété d'instance compteurs[]: number
  compteur: number = 0;


  constructor() { }

  ngOnInit() {
  }


  // méthodes d'instance (=fonction)

  incrementeLeCompteur() {
    this.compteur = this.compteur + 1;
  }

  decrementeLeCompteur() {
    this.compteur -= 1; // this.compteur = this.compteur - 1
  }

}
