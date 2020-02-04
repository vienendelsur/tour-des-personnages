import { Component, OnInit } from '@angular/core';
import { PERSONNAGES } from '../mock-personnages';
import { Personnage } from '../personnage';


@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {


  //création d'une propriété
  selectedPersonnage: Personnage;
  personnages =  PERSONNAGES;

  constructor() { }

  ngOnInit() {
  }

  // une méthode, comme une fonction

  onSelect(personnage:Personnage) {
    this.selectedPersonnage =  personnage;

  }

}
