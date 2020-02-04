import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.component.html',
  styleUrls: ['./personnage-detail.component.css']
})
export class PersonnageDetailComponent implements OnInit {

  @Input() personnage: Personnage;
  
  constructor() { }

  ngOnInit() {
  }

}
