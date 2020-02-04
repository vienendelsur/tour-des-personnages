import { Component } from '@angular/core'; //importation de la classe component

@Component({// decorator décore la class AppComponent
  selector: 'app-root',// nom de notre composant de base qui contiendra d'autres composants on peut le changer si on veut
  templateUrl: './app.component.html',// le template la partie visible du HTML
  styleUrls: ['./app.component.css'] //style CSS associé au rendu HTML  j'y ai copié les styles qui se trouvaient dans l'en-tête ud .html
})
export class AppComponent {// partie logique du composant > une seule propriété pour le moment
  title = 'Tous les personnages de Tintin';
}
