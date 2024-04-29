import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrl: './exercice1-enfant.component.scss'
})
export class Exercice1EnfantComponent {
  @Input({required: true}) public compteurEnfant !: number ;
  @Output() public submitCompteurEnfant : EventEmitter<number> = new EventEmitter;
  test
  
  public addcompteur(boolean : boolean): void {
    boolean? (
      this.compteurEnfant++ 
    ):(
      this.compteurEnfant--
    )

    this.submitCompteurEnfant.emit(this.compteurEnfant);
  }
}
