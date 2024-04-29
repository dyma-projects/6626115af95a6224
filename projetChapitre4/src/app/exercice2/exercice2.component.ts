import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrl: './exercice2.component.scss'
})
export class Exercice2Component implements AfterViewInit{
  
  public valueInput : string ;
  @ViewChild('inputText') public inputElementRef!: ElementRef<HTMLInputElement>;
  public valeur : string = '';

  ngAfterViewInit(): void {
    this.inputElementRef.nativeElement.addEventListener('input',()=>{
      this.valeur = this.inputElementRef?.nativeElement?.value
    })  
  }

}
