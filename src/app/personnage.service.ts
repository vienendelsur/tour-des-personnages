import { Injectable } from '@angular/core';
import { PERSONNAGES } from './mock-personnages';
import { Personnage } from './personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor() { }

  getPersonnages(): Personnage[] {
    return PERSONNAGES;
  }
}
