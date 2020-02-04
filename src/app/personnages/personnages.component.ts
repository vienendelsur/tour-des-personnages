import { Component, OnInit } from '@angular/core';

import { Personnage } from '../personnage';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css']
})
export class PersonnagesComponent implements OnInit {

  personnage: Personnage = {
    id: 1,
    name: "Tintin"
  }

  constructor() { }

  ngOnInit() {
  }

}
