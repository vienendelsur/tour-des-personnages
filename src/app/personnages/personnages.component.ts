import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import { PersonnageService} from '../personnage.service';


@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {


  //création d'une propriété
  selectedPersonnage: Personnage;
  personnages: Personnage[];

  constructor(private personnageService: PersonnageService) { }

  ngOnInit() {
    this.getPersonnages();
  } 

  // une méthode, comme une fonction

  onSelect(personnage:Personnage) {
    this.selectedPersonnage =  personnage;

  }

  getPersonnages() {
    this.personnages = this.personnageService.getPersonnages();
  }

}
