import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice1EnfantComponent } from './exercice1-enfant.component';

describe('Exercice1EnfantComponent', () => {
  let component: Exercice1EnfantComponent;
  let fixture: ComponentFixture<Exercice1EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercice1EnfantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercice1EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
