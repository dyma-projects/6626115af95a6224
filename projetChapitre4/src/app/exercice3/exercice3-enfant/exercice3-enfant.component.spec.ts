import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice3EnfantComponent } from './exercice3-enfant.component';

describe('Exercice3EnfantComponent', () => {
  let component: Exercice3EnfantComponent;
  let fixture: ComponentFixture<Exercice3EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercice3EnfantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exercice3EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
