import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.scss'
})
export class Exercice1Component {
  public compteurParent: number = 0 ;

  public changeCompteurFromChildren(compteurEnfant : number):void{
    this.compteurParent = compteurEnfant ; 
  }
}
